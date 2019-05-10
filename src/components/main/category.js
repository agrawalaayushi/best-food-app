import React, { Component } from 'react';
import SearchBar from '../common/search-bar';
import CategoryTab from '../common/category-tab';
import FavouriteRecipeCard from '../common/favourite-recipe-card';


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

  getCategoryRecipeCard (item, index) {
    return (
      <FavouriteRecipeCard 
      key={index.toString()}
      item={item}
      actionBtnText={'Add to bag'}/>
    )
  }
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  
  render() {
    const { categories, recipes } = this.props
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
          <div className="category-list">
        { recipes.length > 0 &&
          recipes.map((item, index) =>( this.getCategoryRecipeCard(item, index) ))}
          </div>
        </div>
    );
  }
}


export default (Category);
