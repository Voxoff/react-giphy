import React, { Component } from 'react'

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './giflist.jsx';

import Giphy from 'giphy-api';

class App extends Component {
  search(){
    
    return gifs
  }
  render(){
    const gifs = [
      {id: "ftevww7vO4QYNoS0Fd"},
      {id: "2rACoX3oXJX1kZceZZ"}
    ]

    return ( 
    <div className="container">
      <div className="left-side">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="ftevww7vO4QYNoS0Fd"/>
        </div>
      </div>
      <div className="right-side">
        <GifList gifs={gifs} />
      </div> 
    </div>
    )
  }
}

export default App;
