import React, { Component } from 'react'

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './giflist.jsx';

import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedgif: "ftevww7vO4QYNoS0Fd"
    }
  }

  search = (query) => { 
    giphy('wmt9eubVynqAsZEc3JFDjlxIJuBItIaV')
    .search({q: query, limit: 5}, (err,res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedgif: id
    });
  }

  render(){
        // giphy('wmt9eubVynqAsZEc3JFDjlxIJuBItIaV').search('pokemon', function(err,res) {console.log(res.data)})
    return ( 
    <div className="container">
      <div className="left-side">
        <SearchBar searchFunction={this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedgif}/>
        </div>
      </div>
      <div className="right-side">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
      </div> 
    </div>
    )
  }
}

export default App;
