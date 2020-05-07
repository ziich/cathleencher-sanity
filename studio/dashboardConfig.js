export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3aecfcd3e6063970b788a',
                  title: 'Sanity Studio',
                  name: 'cathleencher-sanity-studio',
                  apiId: '88b50cc7-95ca-4c7d-b54b-0b68dc56d5de'
                },
                {
                  buildHookId: '5eb3aecf5a27a25cdd66182f',
                  title: 'Portfolio Website',
                  name: 'cathleencher-sanity',
                  apiId: 'cc6d0412-bc30-4626-8356-4ad14f27708c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ziich/cathleencher-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://cathleencher-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
