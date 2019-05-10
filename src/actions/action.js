import ActionTypes from '../constants/action-type';
import {
  getFoodAppData
} from '../utils/app-api-utils';

// GET UPCOMING MOVIES
export function requestFoodAppData(params) {
  return(dispatch)=>{
    getFoodAppData(dispatch, params);
  }
};

export function receiveFoodDataResponse(response) {
  response.foodAppDataResponse = response;
  return{
    type: ActionTypes.RECEIVE_FOOD_APP_DATA,
    response
  }
};

