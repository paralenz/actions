export type Gitmoji = {
    emoji: string
    code: string
    description: string
    name: string
    category: 'none' | 'feature' | 'fix' | 'tweak' | 'performance' | 'chore'
        | 'deployment' | 'dependency' | 'infrastructure'

  }
export const emojies: ReadonlyArray<Gitmoji> = [
  {
    emoji: '🎨',
    code: ':art:',
    description: 'Improve structure / format of the code.',
    name: 'art',
    category: 'chore'
  },
  {
    emoji: '⚡️',
    code: ':zap:',
    description: 'Improve performance.',
    name: 'zap',
    category: 'performance'
  },
  {
    emoji: '🔥',
    code: ':fire:',
    description: 'Remove code or files.',
    name: 'fire',
    category: 'chore'
  },
  {
    emoji: '🐛',
    code: ':bug:',
    description: 'Fix a bug.',
    name: 'bug',
    category: 'fix'
  },
  {
    emoji: '🚑️',
    code: ':ambulance:',
    description: 'Critical hotfix.',
    name: 'ambulance',
    category: 'fix'
  },
  {
    emoji: '✨',
    code: ':sparkles:',
    description: 'Introduce new features.',
    name: 'sparkles',
    category: 'feature'
  },
  {
    emoji: '📝',
    code: ':memo:',
    description: 'Add or update documentation.',
    name: 'memo',
    category: 'chore'
  },
  {
    emoji: '🚀',
    code: ':rocket:',
    description: 'Deploy stuff.',
    name: 'rocket',
    category: 'deployment'
  },
  {
    emoji: '💄',
    code: ':lipstick:',
    description: 'Add or update the UI and style files.',
    name: 'lipstick',
    category: 'tweak'
  },
  {
    emoji: '🎉',
    code: ':tada:',
    description: 'Begin a project.',
    name: 'tada',
    category: 'none'
  },
  {
    emoji: '✅',
    code: ':white_check_mark:',
    description: 'Add, update, or pass tests.',
    name: 'white-check-mark',
    category: 'chore'
  },
  {
    emoji: '🔒️',
    code: ':lock:',
    description: 'Fix security issues.',
    name: 'lock',
    category: 'fix'
  },
  {
    emoji: '🔐',
    code: ':closed_lock_with_key:',
    description: 'Add or update secrets.',
    name: 'closed-lock-with-key',
    category: 'chore'
  },
  {
    emoji: '🔖',
    code: ':bookmark:',
    description: 'Release / Version tags.',
    name: 'bookmark',
    category: 'deployment'
  },
  {
    emoji: '🚨',
    code: ':rotating_light:',
    description: 'Fix compiler / linter warnings.',
    name: 'rotating-light',
    category: 'tweak'
  },
  {
    emoji: '🚧',
    code: ':construction:',
    description: 'Work in progress.',
    name: 'construction',
    category: 'none'
  },
  {
    emoji: '💚',
    code: ':green_heart:',
    description: 'Fix CI Build.',
    name: 'green-heart',
    category: 'chore'
  },
  {
    emoji: '⬇️',
    code: ':arrow_down:',
    description: 'Downgrade dependencies.',
    name: 'arrow-down',
    category: 'dependency'
  },
  {
    emoji: '⬆️',
    code: ':arrow_up:',
    description: 'Upgrade dependencies.',
    name: 'arrow-up',
    category: 'dependency'
  },
  {
    emoji: '📌',
    code: ':pushpin:',
    description: 'Pin dependencies to specific versions.',
    name: 'pushpin',
    category: 'dependency'
  },
  {
    emoji: '👷',
    code: ':construction_worker:',
    description: 'Add or update CI build system.',
    name: 'construction-worker',
    category: 'infrastructure'
  },
  {
    emoji: '📈',
    code: ':chart_with_upwards_trend:',
    description: 'Add or update analytics or track code.',
    name: 'chart-with-upwards-trend',
    category: 'tweak'
  },
  {
    emoji: '♻️',
    code: ':recycle:',
    description: 'Refactor code.',
    name: 'recycle',
    category: 'chore'
  },
  {
    emoji: '➕',
    code: ':heavy_plus_sign:',
    description: 'Add a dependency.',
    name: 'heavy-plus-sign',
    category: 'dependency'
  },
  {
    emoji: '➖',
    code: ':heavy_minus_sign:',
    description: 'Remove a dependency.',
    name: 'heavy-minus-sign',
    category: 'dependency'
  },
  {
    emoji: '🔧',
    code: ':wrench:',
    description: 'Add or update configuration files.',
    name: 'wrench',
    category: 'infrastructure'
  },
  {
    emoji: '🔨',
    code: ':hammer:',
    description: 'Add or update development scripts.',
    name: 'hammer',
    category: 'infrastructure'
  },
  {
    emoji: '🌐',
    code: ':globe_with_meridians:',
    description: 'Internationalization and localization.',
    name: 'globe-with-meridians',
    category: 'tweak'
  },
  {
    emoji: '✏️',
    code: ':pencil2:',
    description: 'Fix typos.',
    name: 'pencil2',
    category: 'tweak'
  },
  {
    emoji: '💩',
    code: ':poop:',
    description: 'Write bad code that needs to be improved.',
    name: 'poop',
    category: 'none'
  },
  {
    emoji: '⏪️',
    code: ':rewind:',
    description: 'Revert changes.',
    name: 'rewind',
    category: 'none'
  },
  {
    emoji: '🔀',
    code: ':twisted_rightwards_arrows:',
    description: 'Merge branches.',
    name: 'twisted-rightwards-arrows',
    category: 'deployment'
  },
  {
    emoji: '📦️',
    code: ':package:',
    description: 'Add or update compiled files or packages.',
    name: 'package',
    category: 'dependency'
  },
  {
    emoji: '👽️',
    code: ':alien:',
    description: 'Update code due to external API changes.',
    name: 'alien',
    category: 'infrastructure'
  },
  {
    emoji: '🚚',
    code: ':truck:',
    description: 'Move or rename resources (e.g.: files, paths, routes).',
    name: 'truck',
    category: 'tweak'
  },
  {
    emoji: '📄',
    code: ':page_facing_up:',
    description: 'Add or update license.',
    name: 'page-facing-up',
    category: 'infrastructure'
  },
  {
    emoji: '💥',
    code: ':boom:',
    description: 'Introduce breaking changes.',
    name: 'boom',
    category: 'infrastructure'
  },
  {
    emoji: '🍱',
    code: ':bento:',
    description: 'Add or update assets.',
    name: 'bento',
    category: 'tweak'
  },
  {
    emoji: '♿️',
    code: ':wheelchair:',
    description: 'Improve accessibility.',
    name: 'wheelchair',
    category: 'tweak'
  },
  {
    emoji: '💡',
    code: ':bulb:',
    description: 'Add or update comments in source code.',
    name: 'bulb',
    category: 'infrastructure'
  },
  {
    emoji: '🍻',
    code: ':beers:',
    description: 'Write code drunkenly.',
    name: 'beers',
    category: 'none'
  },
  {
    emoji: '💬',
    code: ':speech_balloon:',
    description: 'Add or update text and literals.',
    name: 'speech-balloon',
    category: 'tweak'
  },
  {
    emoji: '🗃️',
    code: ':card_file_box:',
    description: 'Perform database related changes.',
    name: 'card-file-box',
    category: 'infrastructure'
  },
  {
    emoji: '🔊',
    code: ':loud_sound:',
    description: 'Add or update logs.',
    name: 'loud-sound',
    category: 'infrastructure'
  },
  {
    emoji: '🔇',
    code: ':mute:',
    description: 'Remove logs.',
    name: 'mute',
    category: 'infrastructure'
  },
  {
    emoji: '👥',
    code: ':busts_in_silhouette:',
    description: 'Add or update contributor(s).',
    name: 'busts-in-silhouette',
    category: 'infrastructure'
  },
  {
    emoji: '🚸',
    code: ':children_crossing:',
    description: 'Improve user experience / usability.',
    name: 'children-crossing',
    category: 'tweak'
  },
  {
    emoji: '🏗️',
    code: ':building_construction:',
    description: 'Make architectural changes.',
    name: 'building-construction',
    category: 'infrastructure'
  },
  {
    emoji: '📱',
    code: ':iphone:',
    description: 'Work on responsive design.',
    name: 'iphone',
    category: 'tweak'
  },
  {
    emoji: '🤡',
    code: ':clown_face:',
    description: 'Mock things.',
    name: 'clown-face',
    category: 'infrastructure'
  },
  {
    emoji: '🥚',
    code: ':egg:',
    description: 'Add or update an easter egg.',
    name: 'egg',
    category: 'none'
  },
  {
    emoji: '🙈',
    code: ':see_no_evil:',
    description: 'Add or update a .gitignore file.',
    name: 'see-no-evil',
    category: 'infrastructure'
  },
  {
    emoji: '📸',
    code: ':camera_flash:',
    description: 'Add or update snapshots.',
    name: 'camera-flash',
    category: 'infrastructure'
  },
  {
    emoji: '⚗️',
    code: ':alembic:',
    description: 'Perform experiments.',
    name: 'alembic',
    category: 'none'
  },
  {
    emoji: '🔍️',
    code: ':mag:',
    description: 'Improve SEO.',
    name: 'mag',
    category: 'tweak'
  },
  {
    emoji: '🏷️',
    code: ':label:',
    description: 'Add or update types.',
    name: 'label',
    category: 'infrastructure'
  },
  {
    emoji: '🌱',
    code: ':seedling:',
    description: 'Add or update seed files.',
    name: 'seedling',
    category: 'infrastructure'
  },
  {
    emoji: '🚩',
    code: ':triangular_flag_on_post:',
    description: 'Add, update, or remove feature flags.',
    name: 'triangular-flag-on-post',
    category: 'tweak'
  },
  {
    emoji: '🥅',
    code: ':goal_net:',
    description: 'Catch errors.',
    name: 'goal-net',
    category: 'tweak'
  },
  {
    emoji: '💫',
    code: ':dizzy:',
    description: 'Add or update animations and transitions.',
    name: 'animation',
    category: 'tweak'
  },
  {
    emoji: '🗑️',
    code: ':wastebasket:',
    description: 'Deprecate code that needs to be cleaned up.',
    name: 'wastebasket',
    category: 'infrastructure'
  },
  {
    emoji: '🛂',
    code: ':passport_control:',
    description: 'Work on code related to authorization, roles and permissions.',
    name: 'passport-control',
    category: 'infrastructure'
  },
  {
    emoji: '🩹',
    code: ':adhesive_bandage:',
    description: 'Simple fix for a non-critical issue.',
    name: 'adhesive-bandage',
    category: 'fix'
  },
  {
    emoji: '🧐',
    code: ':monocle_face:',
    description: 'Data exploration/inspection.',
    name: 'monocle-face',
    category: 'infrastructure'
  },
  {
    emoji: '⚰️',
    code: ':coffin:',
    description: 'Remove dead code.',
    name: 'coffin',
    category: 'infrastructure'
  },
  {
    emoji: '🧪',
    code: ':test_tube:',
    description: 'Add a failing test.',
    name: 'test-tube',
    category: 'infrastructure'
  },
  {
    emoji: '👔',
    code: ':necktie:',
    description: 'Add or update business logic',
    name: 'necktie',
    category: 'infrastructure'
  },
  {
    emoji: '🩺',
    code: ':stethoscope:',
    description: 'Add or update healthcheck.',
    name: 'stethoscope',
    category: 'infrastructure'
  },
  {
    emoji: '🧱',
    code: ':bricks:',
    description: 'Infrastructure related changes.',
    name: 'bricks',
    category: 'infrastructure'
  },
  {
    emoji: '🧑‍💻',
    code: ':technologist:',
    description: 'Improve developer experience',
    name: 'technologist',
    category: 'infrastructure'
  }
]

export const categories = Object.values(emojies).reduce(
  (categorized: Record<string, Array<string>>, entry: Gitmoji) => categorized[entry.category]
    ? {
      ...categorized,
      [entry.category]: [
        ...categorized[entry.category],
        entry.code, entry.emoji
      ]
    }
    : { ...categorized, [entry.category]: [entry.code, entry.emoji] },
  {}
)
