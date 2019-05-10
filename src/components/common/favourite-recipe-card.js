import React, { Component } from 'react';

class FavouriteRecipeCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
      }

    render() {
        console.log(this.props.item)
        const {item} = this.props;
        return (
            <div className="favourite-recipe-card" >
                <div className="card-image">
                    <img className="recipe-image" src={`${item.image}`} alt="Recipe_image"/>
                </div>
                <div className="recipe-info-wrp">
                    <div>
                        <div className="recipe-name" title={item.name}>{item.name}</div>
                        <div className="recipe-price">Rs. {item.price}</div>
                    </div>
                    <button type="button" className="primary-btn" >REORDER</button>
                </div>
            </div>
        )
    }
}

export default (FavouriteRecipeCard);
