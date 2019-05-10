import axios from 'axios';
import {
  receiveFoodDataResponse
} from '../actions/action';

const API_URL = 'http://temp.dash.zeta.in';

// GET UPCOMING MOVIES
export function getFoodAppData(dispatch) {
  let url = `${API_URL}/food.php`;
  axios.get(url)
  .then(response => {
    const successResponse = response.data;
    dispatch(receiveFoodDataResponse(successResponse));
  })
  .catch(error => {
    const errorResponse = error;
    dispatch(receiveFoodDataResponse(errorResponse));
  });
};
