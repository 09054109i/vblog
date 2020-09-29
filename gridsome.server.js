// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const baseUrl = "https://api.github.com"
const token = "62a0ae1ab4f1770ef711fb726e32acc617b5745a"
const githubUsername = "09054109i"

// const store = require("./src/store/index.js")
const service = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000
})
// service.interceptors.response.use(
//   config => {
//     console.log("config11")
//     let token = "6d9a345019577b3f472f484d3c51f9f16ffb496d"
//     if (token) {
//           let sp = "?"
//           console.log("config.url")
//           // console.log(config)
//           console.log("config.url1")

//           console.log(config.url)
//           console.log("config.ur2")

//           if (config.url.indexOf("?") >= 0) {
//               sp = "&"
//           }
//           config.url = config.url + sp + "access_token=" + token
//       }
//       return config
//   },
//   response => {
//       let responseJson = response.data
//       return response
//   },
//   error => {
//       let message
//       switch (error.response.status) {
//           case 401:
//               message = "Token错误"
//               break
//           default:
//               message = error.response.data.message
//               break
//       }
//       // Vue.prototype.$message({
//       //     message: message,
//       //     type: 'error'
//       // })
//       return Promise.reject('error')
//   }
// )

const getAllProject = async ()=>{
    const query={
        page: 1,
        pageSize: 5,
        pageNumber: 1
    }
    // const url = `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}&access_token=${token}`
    // const url = `/users/${githubUsername}/repos`
    const url = `/users/${githubUsername}/repos?access_token=${token}`

    console.log(url)
    // const response = await service({
    //     url,
    //     method:"GET"
    // })

    const data = await [
      {
        id: 298225841,
        node_id: 'MDEwOlJlcG9zaXRvcnkyOTgyMjU4NDE=',
        name: '09054109i.github.io',
        full_name: '09054109i/09054109i.github.io',
        private: false,
        owner: {
          login: '09054109i',
          id: 67500835,
          node_id: 'MDQ6VXNlcjY3NTAwODM1',
          avatar_url: 'https://avatars2.githubusercontent.com/u/67500835?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/09054109i',
          html_url: 'https://github.com/09054109i',
          followers_url: 'https://api.github.com/users/09054109i/followers',
          following_url: 'https://api.github.com/users/09054109i/following{/other_user}',
          gists_url: 'https://api.github.com/users/09054109i/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/09054109i/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/09054109i/subscriptions',
          organizations_url: 'https://api.github.com/users/09054109i/orgs',
          repos_url: 'https://api.github.com/users/09054109i/repos',
          events_url: 'https://api.github.com/users/09054109i/events{/privacy}',
          received_events_url: 'https://api.github.com/users/09054109i/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/09054109i/09054109i.github.io',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/09054109i/09054109i.github.io',
        forks_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/forks',
        keys_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/teams',
        hooks_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/hooks',
        issue_events_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/issues/events{/number}',
        events_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/events',
        assignees_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/assignees{/user}',
        branches_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/branches{/branch}',
        tags_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/tags',
        blobs_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/languages',
        stargazers_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/stargazers',
        contributors_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/contributors',
        subscribers_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/subscribers',
        subscription_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/subscription',
        commits_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/contents/{+path}',
        compare_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/merges',
        archive_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/downloads',
        issues_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/issues{/number}',
        pulls_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/notifications{?since,all,participating}',        
        labels_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/labels{/name}',
        releases_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/releases{/id}',
        deployments_url: 'https://api.github.com/repos/09054109i/09054109i.github.io/deployments',
        created_at: '2020-09-24T09:06:39Z',
        updated_at: '2020-09-24T09:08:08Z',
        pushed_at: '2020-09-24T09:08:06Z',
        git_url: 'git://github.com/09054109i/09054109i.github.io.git',
        ssh_url: 'git@github.com:09054109i/09054109i.github.io.git',
        clone_url: 'https://github.com/09054109i/09054109i.github.io.git',
        svn_url: 'https://github.com/09054109i/09054109i.github.io',
        homepage: null,
        size: 3502,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'HTML',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: { admin: true, push: true, pull: true }
      },
      {
        id: 298340403,
        node_id: 'MDEwOlJlcG9zaXRvcnkyOTgzNDA0MDM=',
        name: 'vbloggridsome',
        full_name: '09054109i/vbloggridsome',
        private: false,
        owner: {
          login: '09054109i',
          id: 67500835,
          node_id: 'MDQ6VXNlcjY3NTAwODM1',
          avatar_url: 'https://avatars2.githubusercontent.com/u/67500835?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/09054109i',
          html_url: 'https://github.com/09054109i',
          followers_url: 'https://api.github.com/users/09054109i/followers',
          following_url: 'https://api.github.com/users/09054109i/following{/other_user}',
          gists_url: 'https://api.github.com/users/09054109i/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/09054109i/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/09054109i/subscriptions',
          organizations_url: 'https://api.github.com/users/09054109i/orgs',
          repos_url: 'https://api.github.com/users/09054109i/repos',
          events_url: 'https://api.github.com/users/09054109i/events{/privacy}',
          received_events_url: 'https://api.github.com/users/09054109i/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/09054109i/vbloggridsome',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/09054109i/vbloggridsome',
        forks_url: 'https://api.github.com/repos/09054109i/vbloggridsome/forks',
        keys_url: 'https://api.github.com/repos/09054109i/vbloggridsome/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/09054109i/vbloggridsome/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/09054109i/vbloggridsome/teams',
        hooks_url: 'https://api.github.com/repos/09054109i/vbloggridsome/hooks',
        issue_events_url: 'https://api.github.com/repos/09054109i/vbloggridsome/issues/events{/number}',
        events_url: 'https://api.github.com/repos/09054109i/vbloggridsome/events',
        assignees_url: 'https://api.github.com/repos/09054109i/vbloggridsome/assignees{/user}',
        branches_url: 'https://api.github.com/repos/09054109i/vbloggridsome/branches{/branch}',
        tags_url: 'https://api.github.com/repos/09054109i/vbloggridsome/tags',
        blobs_url: 'https://api.github.com/repos/09054109i/vbloggridsome/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/09054109i/vbloggridsome/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/09054109i/vbloggridsome/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/09054109i/vbloggridsome/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/09054109i/vbloggridsome/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/09054109i/vbloggridsome/languages',
        stargazers_url: 'https://api.github.com/repos/09054109i/vbloggridsome/stargazers',
        contributors_url: 'https://api.github.com/repos/09054109i/vbloggridsome/contributors',
        subscribers_url: 'https://api.github.com/repos/09054109i/vbloggridsome/subscribers',
        subscription_url: 'https://api.github.com/repos/09054109i/vbloggridsome/subscription',
        commits_url: 'https://api.github.com/repos/09054109i/vbloggridsome/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/09054109i/vbloggridsome/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/09054109i/vbloggridsome/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/09054109i/vbloggridsome/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/09054109i/vbloggridsome/contents/{+path}',
        compare_url: 'https://api.github.com/repos/09054109i/vbloggridsome/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/09054109i/vbloggridsome/merges',
        archive_url: 'https://api.github.com/repos/09054109i/vbloggridsome/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/09054109i/vbloggridsome/downloads',
        issues_url: 'https://api.github.com/repos/09054109i/vbloggridsome/issues{/number}',
        pulls_url: 'https://api.github.com/repos/09054109i/vbloggridsome/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/09054109i/vbloggridsome/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/09054109i/vbloggridsome/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/09054109i/vbloggridsome/labels{/name}',
        releases_url: 'https://api.github.com/repos/09054109i/vbloggridsome/releases{/id}',
        deployments_url: 'https://api.github.com/repos/09054109i/vbloggridsome/deployments',
        created_at: '2020-09-24T16:52:14Z',
        updated_at: '2020-09-26T10:14:14Z',
        pushed_at: '2020-09-26T10:14:11Z',
        git_url: 'git://github.com/09054109i/vbloggridsome.git',
        ssh_url: 'git@github.com:09054109i/vbloggridsome.git',
        clone_url: 'https://github.com/09054109i/vbloggridsome.git',
        svn_url: 'https://github.com/09054109i/vbloggridsome',
        homepage: null,
        size: 219,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'Vue',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: { admin: true, push: true, pull: true }
      }
    ]
    return data
}

const getAllFollower = async ()=>{
  const query={
      page: 1,
      pageSize: 5,
      pageNumber: 1
  }
  // const url = `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}&access_token=${token}`
  const url =  `/users/${githubUsername}/followers?access_token=${token}`
  console.log(url)
  // const { data } = await service({
  //     url,
  //     method:"GET"
  // })
  // console.log(data)
  const data = [
    {
      login: '363797271',
      id: 29295250,
      node_id: 'MDQ6VXNlcjI5Mjk1MjUw',
      avatar_url: 'https://avatars2.githubusercontent.com/u/29295250?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/363797271',
      html_url: 'https://github.com/363797271',
      followers_url: 'https://api.github.com/users/363797271/followers',
      following_url: 'https://api.github.com/users/363797271/following{/other_user}',
      gists_url: 'https://api.github.com/users/363797271/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/363797271/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/363797271/subscriptions',
      organizations_url: 'https://api.github.com/users/363797271/orgs',
      repos_url: 'https://api.github.com/users/363797271/repos',
      events_url: 'https://api.github.com/users/363797271/events{/privacy}',
      received_events_url: 'https://api.github.com/users/363797271/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'SoutheastAsiaSniper',
      id: 47980936,
      node_id: 'MDQ6VXNlcjQ3OTgwOTM2',
      avatar_url: 'https://avatars3.githubusercontent.com/u/47980936?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/SoutheastAsiaSniper',
      html_url: 'https://github.com/SoutheastAsiaSniper',
      followers_url: 'https://api.github.com/users/SoutheastAsiaSniper/followers',
      following_url: 'https://api.github.com/users/SoutheastAsiaSniper/following{/other_user}',
      gists_url: 'https://api.github.com/users/SoutheastAsiaSniper/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/SoutheastAsiaSniper/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/SoutheastAsiaSniper/subscriptions',
      organizations_url: 'https://api.github.com/users/SoutheastAsiaSniper/orgs',
      repos_url: 'https://api.github.com/users/SoutheastAsiaSniper/repos',
      events_url: 'https://api.github.com/users/SoutheastAsiaSniper/events{/privacy}',
      received_events_url: 'https://api.github.com/users/SoutheastAsiaSniper/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'laugh0608',
      id: 48167499,
      node_id: 'MDQ6VXNlcjQ4MTY3NDk5',
      avatar_url: 'https://avatars1.githubusercontent.com/u/48167499?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/laugh0608',
      html_url: 'https://github.com/laugh0608',
      followers_url: 'https://api.github.com/users/laugh0608/followers',
      following_url: 'https://api.github.com/users/laugh0608/following{/other_user}',
      gists_url: 'https://api.github.com/users/laugh0608/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/laugh0608/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/laugh0608/subscriptions',
      organizations_url: 'https://api.github.com/users/laugh0608/orgs',
      repos_url: 'https://api.github.com/users/laugh0608/repos',
      events_url: 'https://api.github.com/users/laugh0608/events{/privacy}',
      received_events_url: 'https://api.github.com/users/laugh0608/received_events',
      type: 'User',
      site_admin: false
    }
  ]
  return data
}

const getAllFollowing = async ()=>{
  const query={
      page: 1,
      pageSize: 5,
      pageNumber: 1
  }
  // const url = `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}&access_token=${token}`
  const url =  `/users/${githubUsername}/following?access_token=${token}`
  console.log(url)
  // const { data } = await service({
  //     url,
  //     method:"GET"
  // })
  // console.log(data)
  const data = [
    {
      login: '363797271',
      id: 29295250,
      node_id: 'MDQ6VXNlcjI5Mjk1MjUw',
      avatar_url: 'https://avatars2.githubusercontent.com/u/29295250?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/363797271',
      html_url: 'https://github.com/363797271',
      followers_url: 'https://api.github.com/users/363797271/followers',
      following_url: 'https://api.github.com/users/363797271/following{/other_user}',
      gists_url: 'https://api.github.com/users/363797271/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/363797271/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/363797271/subscriptions',
      organizations_url: 'https://api.github.com/users/363797271/orgs',
      repos_url: 'https://api.github.com/users/363797271/repos',
      events_url: 'https://api.github.com/users/363797271/events{/privacy}',
      received_events_url: 'https://api.github.com/users/363797271/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'SoutheastAsiaSniper',
      id: 47980936,
      node_id: 'MDQ6VXNlcjQ3OTgwOTM2',
      avatar_url: 'https://avatars3.githubusercontent.com/u/47980936?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/SoutheastAsiaSniper',
      html_url: 'https://github.com/SoutheastAsiaSniper',
      followers_url: 'https://api.github.com/users/SoutheastAsiaSniper/followers',
      following_url: 'https://api.github.com/users/SoutheastAsiaSniper/following{/other_user}',
      gists_url: 'https://api.github.com/users/SoutheastAsiaSniper/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/SoutheastAsiaSniper/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/SoutheastAsiaSniper/subscriptions',
      organizations_url: 'https://api.github.com/users/SoutheastAsiaSniper/orgs',
      repos_url: 'https://api.github.com/users/SoutheastAsiaSniper/repos',
      events_url: 'https://api.github.com/users/SoutheastAsiaSniper/events{/privacy}',
      received_events_url: 'https://api.github.com/users/SoutheastAsiaSniper/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'laugh0608',
      id: 48167499,
      node_id: 'MDQ6VXNlcjQ4MTY3NDk5',
      avatar_url: 'https://avatars1.githubusercontent.com/u/48167499?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/laugh0608',
      html_url: 'https://github.com/laugh0608',
      followers_url: 'https://api.github.com/users/laugh0608/followers',
      following_url: 'https://api.github.com/users/laugh0608/following{/other_user}',
      gists_url: 'https://api.github.com/users/laugh0608/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/laugh0608/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/laugh0608/subscriptions',
      organizations_url: 'https://api.github.com/users/laugh0608/orgs',
      repos_url: 'https://api.github.com/users/laugh0608/repos',
      events_url: 'https://api.github.com/users/laugh0608/events{/privacy}',
      received_events_url: 'https://api.github.com/users/laugh0608/received_events',
      type: 'User',
      site_admin: false
    }
  ]
  return data
}

const getAllBlog = async ()=>{
  const query={
      page: 1,
      pageSize: 5,
      pageNumber: 1
  }
  // const url = `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}&access_token=${token}`
  const url =  `/users/${githubUsername}/gists?access_token=${token}`
  console.log(url)
  // const { data } = await service({
  //     url,
  //     method:"GET"
  // })
  const data = [
  {
    "url": "https://api.github.com/gists/071516fd19fc08c3ef05a1ecda12bb99",
    "forks_url": "https://api.github.com/gists/071516fd19fc08c3ef05a1ecda12bb99/forks",
    "commits_url": "https://api.github.com/gists/071516fd19fc08c3ef05a1ecda12bb99/commits",
    "id": "071516fd19fc08c3ef05a1ecda12bb99",
    "node_id": "MDQ6R2lzdDA3MTUxNmZkMTlmYzA4YzNlZjA1YTFlY2RhMTJiYjk5",
    "git_pull_url": "https://gist.github.com/071516fd19fc08c3ef05a1ecda12bb99.git",
    "git_push_url": "https://gist.github.com/071516fd19fc08c3ef05a1ecda12bb99.git",
    "html_url": "https://gist.github.com/071516fd19fc08c3ef05a1ecda12bb99",
    "files": {
      "3": {
        "filename": "3",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/09054109i/071516fd19fc08c3ef05a1ecda12bb99/raw/e440e5c842586965a7fb77deda2eca68612b1f53/3",
        "size": 1
      }
    },
    "public": true,
    "created_at": "2020-09-24T10:06:01Z",
    "updated_at": "2020-09-24T10:06:01Z",
    "description": "3",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/071516fd19fc08c3ef05a1ecda12bb99/comments",
    "owner": {
      "login": "09054109i",
      "id": 67500835,
      "node_id": "MDQ6VXNlcjY3NTAwODM1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/67500835?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/09054109i",
      "html_url": "https://github.com/09054109i",
      "followers_url": "https://api.github.com/users/09054109i/followers",
      "following_url": "https://api.github.com/users/09054109i/following{/other_user}",
      "gists_url": "https://api.github.com/users/09054109i/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/09054109i/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/09054109i/subscriptions",
      "organizations_url": "https://api.github.com/users/09054109i/orgs",
      "repos_url": "https://api.github.com/users/09054109i/repos",
      "events_url": "https://api.github.com/users/09054109i/events{/privacy}",
      "received_events_url": "https://api.github.com/users/09054109i/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/e746c755bfe03c4b7eaa9e3e77f709f7",
    "forks_url": "https://api.github.com/gists/e746c755bfe03c4b7eaa9e3e77f709f7/forks",
    "commits_url": "https://api.github.com/gists/e746c755bfe03c4b7eaa9e3e77f709f7/commits",
    "id": "e746c755bfe03c4b7eaa9e3e77f709f7",
    "node_id": "MDQ6R2lzdGU3NDZjNzU1YmZlMDNjNGI3ZWFhOWUzZTc3ZjcwOWY3",
    "git_pull_url": "https://gist.github.com/e746c755bfe03c4b7eaa9e3e77f709f7.git",
    "git_push_url": "https://gist.github.com/e746c755bfe03c4b7eaa9e3e77f709f7.git",
    "html_url": "https://gist.github.com/e746c755bfe03c4b7eaa9e3e77f709f7",
    "files": {
      "2": {
        "filename": "2",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/09054109i/e746c755bfe03c4b7eaa9e3e77f709f7/raw/d8263ee9860594d2806b0dfd1bfd17528b0ba2a4/2",
        "size": 1
      }
    },
    "public": true,
    "created_at": "2020-09-24T10:05:37Z",
    "updated_at": "2020-09-24T10:05:38Z",
    "description": "2",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/e746c755bfe03c4b7eaa9e3e77f709f7/comments",
    "owner": {
      "login": "09054109i",
      "id": 67500835,
      "node_id": "MDQ6VXNlcjY3NTAwODM1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/67500835?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/09054109i",
      "html_url": "https://github.com/09054109i",
      "followers_url": "https://api.github.com/users/09054109i/followers",
      "following_url": "https://api.github.com/users/09054109i/following{/other_user}",
      "gists_url": "https://api.github.com/users/09054109i/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/09054109i/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/09054109i/subscriptions",
      "organizations_url": "https://api.github.com/users/09054109i/orgs",
      "repos_url": "https://api.github.com/users/09054109i/repos",
      "events_url": "https://api.github.com/users/09054109i/events{/privacy}",
      "received_events_url": "https://api.github.com/users/09054109i/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/1c352684c5c342e7ee5d19d1bb6d49ae",
    "forks_url": "https://api.github.com/gists/1c352684c5c342e7ee5d19d1bb6d49ae/forks",
    "commits_url": "https://api.github.com/gists/1c352684c5c342e7ee5d19d1bb6d49ae/commits",
    "id": "1c352684c5c342e7ee5d19d1bb6d49ae",
    "node_id": "MDQ6R2lzdDFjMzUyNjg0YzVjMzQyZTdlZTVkMTlkMWJiNmQ0OWFl",
    "git_pull_url": "https://gist.github.com/1c352684c5c342e7ee5d19d1bb6d49ae.git",
    "git_push_url": "https://gist.github.com/1c352684c5c342e7ee5d19d1bb6d49ae.git",
    "html_url": "https://gist.github.com/1c352684c5c342e7ee5d19d1bb6d49ae",
    "files": {
      "1": {
        "filename": "1",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/09054109i/1c352684c5c342e7ee5d19d1bb6d49ae/raw/56a6051ca2b02b04ef92d5150c9ef600403cb1de/1",
        "size": 1
      }
    },
    "public": true,
    "created_at": "2020-09-24T09:45:11Z",
    "updated_at": "2020-09-24T09:45:11Z",
    "description": "1",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/1c352684c5c342e7ee5d19d1bb6d49ae/comments",
    "owner": {
      "login": "09054109i",
      "id": 67500835,
      "node_id": "MDQ6VXNlcjY3NTAwODM1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/67500835?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/09054109i",
      "html_url": "https://github.com/09054109i",
      "followers_url": "https://api.github.com/users/09054109i/followers",
      "following_url": "https://api.github.com/users/09054109i/following{/other_user}",
      "gists_url": "https://api.github.com/users/09054109i/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/09054109i/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/09054109i/subscriptions",
      "organizations_url": "https://api.github.com/users/09054109i/orgs",
      "repos_url": "https://api.github.com/users/09054109i/repos",
      "events_url": "https://api.github.com/users/09054109i/events{/privacy}",
      "received_events_url": "https://api.github.com/users/09054109i/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  }
]
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
