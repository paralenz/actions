/* eslint-disable @typescript-eslint/no-var-requires */
const { getInput } = require('@actions/core')
// const github = require('@actions/github')
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Webhook, MessageBuilder } = require('discord-webhook-node')

async function run () {
  const hook = new Webhook(getInput('webhook-url'))

  const embed = new MessageBuilder()
    .setTitle('My title here')
    .setAuthor(getInput('author'), 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
    .setURL('https://www.google.com')
    .addField('First field', 'this is inline', true)
    .addField('Second field', 'this is not inline')
    .setColor('#00b0f4')
    .setThumbnail(getInput('thumbnail-url'))
    .setDescription('Oh look a description :)')
    .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
    .setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
    .setTimestamp()

  hook.send(embed)
}

run()
