import {API_URL} from './config';

const getMealById = async (mealId) => {
   const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    await response.json();
}