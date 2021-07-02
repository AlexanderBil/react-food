import {API_URL} from './config';

const getMealById = async (mealId) => {
   const response fetch(API_URL + 'lookup.php?i=' + mealId);

}