import {API_URL} from './config';

const getMealById = async (mealId) => {
    fetch(API_URL + 'lookup.php?i=' + mealId);

}