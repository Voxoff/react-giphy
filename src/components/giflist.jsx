import React, { Component } from 'react'
import Gif from './gif.jsx'

class GifList extends Component {
  // constructor(props){
  //   super(props)
  // }
  renderList(){
    return this.props.gifs.map((gif) => <Gif id={gif.id} key={gif.id}/> )
  }

  render(){  
    return(
    <div>  
      <h2> Small things make base men proud. For me it's gifs </h2>
      {this.renderList()}
    </div>
      )
  }
}

export default GifList;
