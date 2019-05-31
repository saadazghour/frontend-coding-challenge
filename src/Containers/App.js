// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import RepoList from '../Components/RepoList';
// import Repo from '../Components/Repo';
import axios from 'axios';
import moment from 'moment';



class App extends Component {
    constructor(){
        super();
        this.state = {
            repo: [],
            error: '',
            page: 1,
            loading: true,

        }
    }


    componentDidMount(){

      this.loadRepo()       // load the initial Repos
      window.addEventListener('scroll', this.handleLoadMore )
    }


    loadRepo = () => {

      const { page, repo } = this.state

      const DATE_30_DAYS_BEFORE = moment().subtract(30, 'days').format('YYYY-MM-DD')

    // Getting the data from Github API

      axios.get(
        ` https://api.github.com/search/repositories?q=created:>${ DATE_30_DAYS_BEFORE }&sort=stars&order=desc&page=${ page } `
      )

        .then(resp => {
          // console.log(resp);

          this.setState({
            // repo: resp.data.items,
            repo: [...repo, ...resp.data.items ],  // here when scrolling, Repo get updated instantly
            loading: false,

          });

          // console.log("Repo Updated: ", repo);
        })

        .catch((error) => {
          this.setState({
            error: error,
            loding: false,
          });
        })
    }


    handleLoadMore = () => {

      const { loading } = this.state

      if( window.pageYOffset + window.innerHeight >= window.innerHeight && !loading ){
        this.loadData();
      }
    }


    loadData = () => {

      const { page } = this.state

      this.setState((prevState) => ({
        page: prevState.page + page,
        loading: true,
      }))

      this.loadRepo();
    }


  render() {

    const { repo } = this.state

      return (
        <div>
          <RepoList repo={ repo } />
          <div> Loading ...</div>
        </div>
      )
  }

}


export default App