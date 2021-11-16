/* eslint-disable @typescript-eslint/no-var-requires */
const core = require('@actions/core')
const axios = require('axios').default

axios.get('https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
  .then(r => r.data)
  .then(({ gitmojis }) => Object.keys(gitmojis).map(key => {
    const { name, emoji } = gitmojis[key]

    return [name, emoji].join(',')
  }))
  .then(r => r.join(','))
  .then(gitmojis => core.setOutput('gitmojis', gitmojis))
