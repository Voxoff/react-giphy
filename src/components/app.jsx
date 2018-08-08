import React, { Component } from 'react'

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './giflist.jsx';

class App extends Component {
  search(){

    gifs = [
      id="ftevww7vO4QYNoS0Fd",
      id="ftevww7vO4QYNoS0Fd"
    ]
  }
  render(){
    return ( 
    <div className="container">
      <div className="left-side">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="ftevww7vO4QYNoS0Fd"/>
        </div>
      </div>
      <div className="right-side">
        <GifList gif="ftevww7vO4QYNoS0Fd" />
      </div> 
    </div>
    )
  }
}

export default App;
