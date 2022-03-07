import inquirer from 'inquirer'
import Mustache from 'mustache'
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

const template = readFileSync(join(__dirname, '../scripts', 'templates', 'action.txt'), { encoding: 'utf-8' })

const validate = (input: string) => {
  if (input.length < 1) {
    return 'Required value'
  }
  return true
}

const main = async () => {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'folder', message: 'In what folder should the action be stored:', validate },
    { type: 'input', name: 'name', message: 'Action name:', validate },
    { type: 'input', name: 'description', message: 'Action description:', validate }
  ])
  const output = Mustache.render(template, answers)

  if (!existsSync(answers.folder)) {
    console.log(`🎉 ${answers.folder} was created`)
    mkdirSync(answers.folder)
  }
  writeFileSync(join(__dirname, '..', answers.folder, 'action.yml'), output)

  console.log('🎉 action.yml was created')
}

(async () => await main())()
