import React, { Component } from 'react';
import Loading from './Loading';

class Home extends Component {
  
  render () {
    document.title = 'Bohubrihi Restaurant'
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default Home;