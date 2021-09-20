import fs from 'fs'
import path from 'path'
import glob from 'glob'
import yaml from 'js-yaml'
import tableify from 'markdown-tableify'

const { version } = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), { encoding: 'utf-8' }))

const files = glob.sync('**/*.yml', { ignore: ['**/node_modules/**', '**/example/*'] })

const read = (path: string) => fs.readFileSync(path, { encoding: 'utf-8' })

files.forEach(file => {
  const { inputs, name, description } = JSON.parse(JSON.stringify(yaml.load(read(file))))

  const values = inputs && Object.keys(inputs)
    .map(name => ({
      name,
      required: inputs[name].required ? '**Yes**' : 'No',
      defaultValue: `\`${inputs[name].default}\`` || '',
      description: inputs[name].description || ''
    }))

  const table = inputs && tableify(values, {
    headers: [{
      name: 'name',
      align: ':---',
      title: 'Name'
    },
    {
      name: 'required',
      align: ':---',
      title: 'Required'
    },
    {
      name: 'defaultValue',
      align: ':---',
      title: 'Default'
    }, {
      name: 'description',
      align: ':---',
      title: 'Description'
    }]
  })

  const [folder] = file.split('/')
  const packageName = `${folder}/README.md`
  const outPath = path.join(__dirname, '..', packageName)

  const content = `# paralenz/${folder}
${name}

${description}
    
### Usage:
\`\`\`yaml
  - uses: paralenz/${folder}@master
  
  # or lock to a specific version
  - uses: paralenz/${folder}@v${version}
\`\`\`

${table ? 'Options' : ''}
${table ?? ''}

<hr />

This documentation is generated automaticlly. All edits of this file will be overwritten on the next release.
Please do noo edit this file.
    `

  try {
    fs.writeFileSync(outPath, content, { encoding: 'utf-8' })

    console.error(`🎉 Generated file: ${packageName}`)
  } catch (err) {
    console.error(`🔥 Could not write to ${outPath}`)
  }
})
