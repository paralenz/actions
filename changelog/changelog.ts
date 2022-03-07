import * as Core from '@actions/core'
import * as Github from '@actions/github'
import { emojies } from './categories'

async function run (): Promise<void> {
  const client = Github.getOctokit(Core.getInput('token', { required: true }))

  const [owner, repo] = Core.getInput('repo', { required: true }).split('/')
  const branch = Core.getInput('branch', { required: true })

  const [{ created_at }] = (await client.rest.repos.listReleases({
    owner,
    repo,
    page: 1,
    per_page: 1
  })).data

  const commits = (await client.rest.repos.listCommits({
    owner,
    repo,
    per_page: 1000,
    since: created_at,
    sha: branch
  }))
    .data
    .map(({ commit }) => {
      const [title] = commit.message.split('\n')

      return title
    })
    .filter(title => {
      const msg = title.toLowerCase()
      const withoutGitmoji = msg.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '') // remove all emojies

      const shouldBeRemoved = withoutGitmoji.length === 0 || msg.includes('revert') ||
      msg.includes('arrow_up') || msg.startsWith('⬆️') ||
      msg.startsWith('🔖') || msg.includes('👷') || msg.includes('➕')

      return shouldBeRemoved ? undefined : title
    })
    .filter(Boolean)
    .reduce((acc: Array<string>, title) => {
      if (!title.startsWith(':')) {
        return [...acc, title]
      }

      const [prefix] = title.split(' ')
      const { emoji } = Object.values(emojies).find(e => e.code === prefix) || {}

      return [
        ...acc,
        `${emoji} ${title.slice(prefix.length)}`
      ]
    }, [])
    .reduce(
      (
        acc: Array<{category: string, title: string, messages: Array<string>}>,
        title: string
      ) => {
        const [prefix] = title.split(' ')

        const { category }: any = Object.values(emojies).find(item => item.emoji === prefix) || {}
        const index = acc.findIndex(i => i.category === category)
        if (index === -1) {
          return acc
        }

        acc[index].messages.push(title)

        return acc
      }, [
        { category: 'feature', title: 'Features', messages: [] },
        { category: 'performance', title: 'Performance changes', messages: [] },
        { category: 'tweak', title: 'Tweaks', messages: [] },
        { category: 'fix', title: 'Fixes', messages: [] }
        // { category: 'chore', title: 'Chores', messages: [] },
        // { category: 'infrastructure', title: 'Infrastructural changes', messages: [] },
        // { category: 'dependency', title: 'Dependencies', messages: [] },
        // { category: 'deployment', title: 'Deployment', messages: [] },
        // { category: 'none', title: 'Uncategorised', messages: [] }
      ])
    .map(({ title, messages }) => {
      return !messages.length
        ? undefined
        : `### ${title}
${messages.join('\n')}
      `
    })
    .filter(Boolean)

  const output = commits.join('\n\n')
  //   console.log(output)

  Core.debug(output)

  Core.setOutput('changelog', output)
}

run()
