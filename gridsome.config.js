// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  templates:{
    Project:[
      {
        path:'/project/:id',
        component:'./src/templates/Project.vue'
      }
    ],
    Follower:[
      {
        path:'/follower/:id',
        component:'./src/templates/Follower.vue'
      }
    ]
  }
}
