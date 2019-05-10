import React, { Component } from 'react';
import FavouriteRecipeCard from '../common/favourite-recipe-card';
import { NoDataFound } from '../common/no-data-found';

class Favourite extends Component {
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
  getFavouriteRecipeCard (item, index) {
    return <FavouriteRecipeCard
            key={index.toString()}
            item={item}
          />
  }
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  
  render() {
    console.log(this.props.recipes)
    const {recipes} = this.props;
    return (
        <div className="favourite-dish-wrapper">
             <div className="heading">Favourite</div>
             <div className="heading-content">
                <div className="content">Enjoy what you have been ordering!</div>
                <span>icon</span>
             </div>
           
              { recipes.length > 0 ?
                <div className={"favourite-recipe-wrp"}>
                  { recipes.map((item, index) =>( this.getFavouriteRecipeCard(item, index) )) }
                </div> :
                <NoDataFound msg={"Recipes not available"}/>
              }
             {/* {recipes.map((item, index) =>( this.getFavouriteRecipeCard(item, index) )) } */}
        </div>
    );
  }
}


export default (Favourite);
