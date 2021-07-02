import {API_URL} from './config';

const getMealById = asy (mealId) => {
    fetch(API_URL + 'lookup.php?i=' + mealId);

}