import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import RepositoryList from './components/repository_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };

    this.repositorySearch('Laravel')
  }

  repositorySearch(term) {
    if (term == '') {
      this.setState({repositories: []});
      return;
    }

    axios.get(`https://api.github.com/search/repositories?q=${term}`)
      .then((response) => {
        this.setState({repositories: response.data.items});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const repositorySearch = _.debounce((term) => { this.repositorySearch(term) }, 300);
    console.log(this.state.repositories)
    return (
      <div>
        <SearchBar onSearchTermChange={repositorySearch}/>
        <RepositoryList
          repositories={this.state.repositories} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
