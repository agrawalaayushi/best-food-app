import ActionTypes from '../constants/action-type';
import { Map as makeMap } from 'immutable';

export const initialState =  makeMap({

});

const reducer = (state = initialState, action) => {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {

    case ActionTypes.RECEIVE_FOOD_APP_DATA: {
      state = state.set('foodAppDataResponse', action.response.foodAppDataResponse);
      state = state.set('foodRecepies', action.response.foodAppDataResponse.recipes);
      state = state.set('foodCategories', action.response.foodAppDataResponse.categories);
      return state;
    }

    default:
      return state
  }
 }

 export default reducer;