import {API_URL} from './config';

const getMealById = async (mealId) => {
   const respo fetch(API_URL + 'lookup.php?i=' + mealId);

}