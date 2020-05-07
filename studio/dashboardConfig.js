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
                  buildHookId: '5eb49cfb27bbbb8b37bb1b75',
                  title: 'Sanity Studio',
                  name: 'sanity-sam-studio',
                  apiId: '0ac3d7a1-263b-4a3a-ac39-ad33db46210d'
                },
                {
                  buildHookId: '5eb49cfb4120e877358a13e4',
                  title: 'Portfolio Website',
                  name: 'sanity-sam',
                  apiId: 'ad5ccf39-fc30-45b7-b0a8-2db899d1a13c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ebuckthal/sanity-sam',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-sam.netlify.app',
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
