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
        {!recipe.idMeal ? <Preloader/> : (
          <div className = "recipe">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null }
            <p>{recipe.strInstructions}</p>
            {recipe.strYoutube ? (
              <div className = "row">
                 <h5>Video Recipe</h5>
                 <iframe title = {id} 
                        src={`htpps://www.youtube.com/em/${recipe.strYoutube.slice(-11)}`}/> 
                        <iframe width="1904" height="801" src="https://www.youtube.com/embed/qk3t95s4vgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            )  : null }
          </div>
        )}
         <button onClick = {goBack} className = "btn">Go Back</button>
      </>
  )
}

export {Recipe}