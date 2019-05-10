import React, { Component } from 'react'

class CategoryTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  

  }

  //-----------------------------------
  // Methods
  //-----------------------------------
 

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
      const { category } = this.props
    return (
    //   <div className="category-tab-wrapper">
        <div className="category-tab">
            <img className="tab-image" src={`${category.image}`} alt="Recipe_image"/>
            <div className="tab-name">{category.name}</div>
        </div>
    //   </div>
    )
  }
}

export default (CategoryTab);
