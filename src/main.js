// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'

import 'element-ui/lib/theme-chalk/index.css'

// import 'vant/lib/vant-css/index.css'
import 'vant/lib/index.css';


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, context) {
  // Set default layout as a global component

  Vue.component('Layout', DefaultLayout)

}


