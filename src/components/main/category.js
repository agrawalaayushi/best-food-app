import React, { Component } from 'react';
import SearchBar from '../common/search-bar';
import CategoryTab from '../common/category-tab';

class Category extends Component {
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

  getCategoryTab (item, index) {
    return <CategoryTab
      key={index}
      category={item}/>
  }
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  
  render() {
    const { categories } = this.props
    console.log(categories)
    return (
        <div className="category-dish-wrapper">
            
             <div className="search-wrapper">
             <SearchBar
              handleSearchQueryCallback={(query)=> this.handleSearchRecipes(query)}         
              />
             </div>
             <div className="d-flex heading-wrp">
               <div className="heading">Select Categories</div>
               <div className="mute">Filter</div>
             </div>
             <div className="category-tab-wrp">
             { categories.length > 0 &&
              categories.map((item, index) =>( this.getCategoryTab(item, index) )) }
             </div>
             <div className="category-list"></div>
        </div>
    );
  }
}


export default (Category);
