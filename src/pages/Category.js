//  Страница одной категории
import {useParams, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {getFilteredCategory} from '../api';
import {Preloader} from '../components/Preloader';
import {MealList} from '../components/MealsList';

function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);
  const {goBack} = useHistory();  

  useEffect(() => {
      getFilteredCategory(name)
      .then(data => setMeals(data.meals))
  }, [name]);

  return(
     <>
              <button onClick = {goBack} className = 'btn'>Go Back</button>
      {!meals.length ? <Preloader/> : <MealList meals = {meals}/>}
     </>
  )
}

export {Category}