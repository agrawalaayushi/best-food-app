import React, { Component } from 'react';
import {IMAGE_PLACEHOLDER} from '../../constants/images';

class FavouriteRecipeCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
      }

    render() {
        const { item, actionBtnText } = this.props;
        const imgURL  = item.image || IMAGE_PLACEHOLDER;
        return (
            <div className="recipe-card" >
                <div className="card-image">
                    <img className="recipe-image" src={`${imgURL}`} alt="Recipe_image"/>
                </div>
                <div className="recipe-info-wrp">
                    <div>
                        <div className="recipe-name" title={item.name}>{item.name}</div>
                        <div className="recipe-price">Rs. {item.price}</div>
                    </div>
                    <button type="button" className="primary-btn" >{actionBtnText}</button>
                </div>
            </div>
        )
    }
}

export default (FavouriteRecipeCard);
