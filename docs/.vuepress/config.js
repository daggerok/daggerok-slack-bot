const description = require('../package.json').description;
const base = process.env.NODE_ENV === 'production' ? '/daggerok-slack-bot/' : '/';

module.exports = {
    title: 'Slack Bot Documentation',
    description,
    base,
    themeConfig: {
        nav: [
            { text: 'Documentation'     , link: '/'             },
            { text: 'Getting Started'   , link: '/start/'       },
            { text: 'Resources'         , link: '/resources/'   },
        ],
        sidebar: [
            '/',
            '/start/',
            '/resources/',
        ],
    },
    plugins: [
        'back-to-top',
        'medium-zoom',
        'last-updated',
    ],
};
