const fs = require(`fs`);

// Read the type defs from a file in this site's directory,
// then hand that file to the plugin
const typeDefs = fs.readFileSync(`typedefs.graphql`, {
    encoding: `utf-8`
});

module.exports = {
    __experimentalThemes: [
        {
            resolve: 'gatsby-theme-bulmaio', options: {
                typeDefs,
                references: {
                    author: {plural: 'Authors', layout: 'LogoListing'},
                    technology: {plural: 'Technologies', layout: 'LogoListing'},
                    topic: {plural: 'Topics', layout: 'LogoListing'}
                },
                resources: {
                    tip: {plural: 'Tips'},
                    playlist: {plural: 'Playlists'}
                }
            }
        }
    ],
    siteMetadata: {
        theme: {
            helmet: {
                siteTitle: 'WebStorm Guide'
            },
            navbar: {
                brand: {
                    githubUrl: 'https://github.com/JetBrains/jetbrains_guide',
                    twitterUrl: 'https://twitter.com/webstorm',
                    twitterAccount: '@WebStormIDE'
                },
                start: {
                    items: [
                        {
                            accent: 'success',
                            cssClass: 'documentation',
                            href: '/tips/',
                            label: 'All Tips',
                            icon: 'fas fa-play-circle'
                        },
                        {
                            accent: 'danger',
                            cssClass: 'documentation',
                            href: '/technologies/',
                            label: 'Technologies',
                            icon: 'fas fa-project-diagram'
                        },
                        {
                            accent: 'danger',
                            cssClass: 'documentation',
                            href: '/topics/',
                            label: 'Topics',
                            icon: 'fas fa-project-diagram'
                        },
                        {
                            accent: 'info',
                            cssClass: 'documentation',
                            href: '/about/',
                            label: 'About',
                            icon: 'fas fa-file'
                        },
                        {
                            label: 'Skip',
                            items: [
                                {
                                    href: '/authors/',
                                    label: 'Authors',
                                    icon: 'fas fa-users',
                                    accent: 'success',
                                    description: 'Resource listing organized by author'
                                }
                            ]
                        }
                    ]
                },
                end: {
                    buttons: [
                        {
                            accent: 'light',
                            href: 'https://www.jetbrains.com/webstorm/download/',
                            label: 'Skip'
                        }
                    ],
                    links: [
                        {
                            color: 'light',
                            href: 'https://github.com/jetbrains/jetbrains_guide',
                            icon: 'github'
                        },
                        {
                            color: '55acee',
                            href: 'https://twitter.com/WebStormIDE',
                            icon: 'twitter'
                        }
                    ]
                }
            },
            footer: {
                copyright: 'Copyright © 2000–2020 JetBrains s.r.o.'
            }
        }
    },
    pathPrefix: '/webstorm/guide',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`
            }
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-47631155-3`
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-typescript',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: 'gatsby-remark-embed-snippet',
                        options: {
                            directory: `${__dirname}/demos/`
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-'
                        }
                    },
                    `gatsby-remark-copy-linked-files`
                ]
            }
        }
    ]
};
