import React, { Component } from 'react';
import Favourite from './favourite';
import Category from './category';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  //-----------------------------------
  // Methods
  //-----------------------------------


  //-----------------------------------
  // View
  //-----------------------------------

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  
  render() {
    return (
        <div className="food-app-wrapper">
             <div>Home</div>
             <Favourite />
             <Category />
        </div>
    );
  }
}


export default (Home);
