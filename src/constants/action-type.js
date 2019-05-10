import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'RECEIVE_FOOD_APP_DATA',
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);