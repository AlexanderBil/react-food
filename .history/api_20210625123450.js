import {API_URL} from './config';

const getMealById = async (mealId) => {
   const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
   return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'catego' + mealId);
    return await response.json();
}

export {getMealById}