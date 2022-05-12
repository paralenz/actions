import glob from 'glob'
import yaml from 'js-yaml'
import tableify from 'markdown-tableify'
import path from 'path'
import fs from 'fs'
import { doNotEditDisclaimer } from './do-not-edit-readme-discpalimer'
import { howToUse } from './how-to-use'

const read = (path: string) => fs.readFileSync(path, { encoding: 'utf-8' })

const allFiles = glob.sync('**/*.yml', { ignore: ['**/node_modules/**', '**/example/*'] })
const tableHeaders = [
  { name: 'name', align: ':---', title: 'Name' },
  { name: 'required', align: ':---', title: 'Required' },
  { name: 'defaultValue', align: ':---', title: 'Default' },
  { name: 'description', align: ':---', title: 'Description' }
]
allFiles.forEach(file => {
  const { inputs, name, description } = JSON.parse(JSON.stringify(yaml.load(read(file))))

  const values = inputs && Object.keys(inputs)
    .map(name => ({
      name,
      required: inputs[name].required ? '**Yes**' : 'No',
      defaultValue: `\`${inputs[name].default}\`` ?? '',
      description: inputs[name].description ?? ''
    }))

  const table = inputs && tableify(values, { headers: tableHeaders })

  const [folder] = file.split('/')
  const packageName = `${folder}/README.md`
  const outPath = path.join(__dirname, '..', packageName)

  const content = `# paralenz/actions/${folder}
${name}

${description}
    
${howToUse(
    folder,
    JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), { encoding: 'utf-8' })).version)
}

${table ? '## Options' : ''}
${table ?? ''}

${doNotEditDisclaimer}
    `

  try {
    fs.writeFileSync(outPath, content, { encoding: 'utf-8' })

    console.error(`🎉 Generated file: ${packageName}`)
  } catch (err) {
    console.error(`🔥 Could not write to ${outPath}`)
  }
})
