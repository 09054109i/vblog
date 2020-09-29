// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const fs = require('fs')
const path = require('path'); //系统路径模块

const blogfile = path.join(__dirname,'static/blogs.json')
const projectfile = path.join(__dirname,'static/projects.json')
const socialfile = path.join(__dirname,'static/socials.json')

const baseUrl = "https://api.github.com"
const token = "54ed417fcb4ccb7a664c43b7e4972c93a5f6c4ef"
const githubUsername = "09054109i"

// const store = require("./src/store/index.js")
const service = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000
})

const getAllProject = async ()=>{
    const url = `/users/${githubUsername}/repos?access_token=${token}`

    console.log(url)
    // const response = await service({
    //     url,
    //     method:"GET"
    // })

    const dataStr = fs.readFileSync(projectfile,'utf-8')
    const data =  JSON.parse(dataStr)
    return data
}

const getAllFollower = async ()=>{

  const url =  `/users/${githubUsername}/followers?access_token=${token}`
  console.log(url)
  // const { data } = await service({
  //     url,
  //     method:"GET"
  // })
  // console.log(data)
  const dataStr = fs.readFileSync(socialfile,'utf-8')
  const data =  JSON.parse(dataStr)
  return data
}

const getAllFollowing = async ()=>{

  const url =  `/users/${githubUsername}/following?access_token=${token}`
  console.log(url)
  // const { data } = await service({
  //     url,
  //     method:"GET"
  // })
  // console.log(data)

  const dataStr = fs.readFileSync(socialfile,'utf-8')
  const data =  JSON.parse(dataStr)
  // console.log(data)
  return data
}

const getAllBlog = async ()=>{
  // const url = `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}&access_token=${token}`
  const url =  `/users/${githubUsername}/gists?access_token=${token}`
  console.log(url)
  // const { data } = await service({
  //     url,
  //     method:"GET"
  // })

  const dataStr = fs.readFileSync(blogfile,'utf-8')
  const data =  JSON.parse(dataStr)
  // console.log(data)
 
  return data
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
     
    
    const collection = addCollection('Project')
    const collectionFollower = addCollection('Follower')
    const collectionFollowing = addCollection('Following')
    const collectionBlog = addCollection('Blog')

    const dataProject = await getAllProject()
    const dataFollower = await getAllFollower()
    const dataFollowing = await getAllFollowing()
    const dataBlog = await getAllBlog()

    for (const item of dataProject) {
          collection.addNode({
          id: item.id,
          name: item.name,
          url: item.html_url,
          description: item.description ? item.description : null,
          stargazersCount: item.stargazers_count,
          watchersCount: item.watchers_count,
          forksCount: item.forks_count,
          language: item.language,
          license: item.license ? item.license.spdx_id : null,
          createTime: item.created_at,
          updateTime: item.updated_at,
          hide: false,
      })
    }

    for (const item of dataFollower) {
      collectionFollower.addNode({
      id: item.id,
      name: item.login,
      avatarUrl: item.avatar_url,
      htmlUrl: item.html_url,
      })
    }

    for (const item of dataFollowing) {
      collectionFollowing.addNode({
      id: item.id,
      name: item.login,
      avatarUrl: item.avatar_url,
      htmlUrl: item.html_url,
      })
    }

    for (const item of dataBlog) {
      collectionBlog.addNode({
      id: item.id,
      title: Object.keys(item.files)[0],
      description: item.description,
      createTime: item.created_at,
      updateTime: item.updated_at,
      hide: false,
      })
    }

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
