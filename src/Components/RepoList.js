import React from 'react'
import Repo from './Repo'

const RepoList = ({ repo }) => {
  return (
    <div>
      {
        repo.map((item, index) => {
          return (
            <Repo
              key={repo[index].id}
              avatar_url={repo[index].owner.avatar_url}
              owner={repo[index].owner.login}
              name={repo[index].name}
              html_url={repo[index].html_url}
              description={repo[index].description}
              stargazers_count={repo[index].stargazers_count}
              open_issues_count={repo[index].open_issues_count}
              // issues_url = { repo[index].issues_url }
              // stargazers_url = { repo[index].stargazers_url }
              created_at={repo[index].created_at}
            />
          )
        })
      }
    </div>
  )
}

export default RepoList
