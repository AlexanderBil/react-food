import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getMealById} from '../api';

function Recipe(){
  const [recipe, setRecipe] = useState({})
  const {id} = useParams();
  const

    useEffect(() => {
       getMealById(id)
       .then(data => setRecipe(data.meals[0]))
    })

  return (
      <>

      </>
  )
}

export {Recipe}