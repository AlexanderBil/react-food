import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';

function Recipe(){
  const [recipe, setRecipe] = useState({})
  const {id} = useParams();
  const {goBack} = useHistory();

    useEffect(() => {
       getMealById(id)
       .then(data => setRecipe(data.meals[0]))
    }, [id])

  return (
      <>
        <button onClick = {goBack} className = "btn">Go Back</button>
        {!recipe.idMeal ? <Preloader/> : (
          <div className = "reci"></div>
        )}
      </>
  )
}

export {Recipe}