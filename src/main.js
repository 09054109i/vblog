// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
import 'vant/lib/index.css';


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, context) {
  // Set default layout as a global component
  console.log(context)
  Vue.use(Vant)
  Vue.use(ElementUI)
  Vue.use(mavonEditor)
  Vue.component('Layout', DefaultLayout)

}


