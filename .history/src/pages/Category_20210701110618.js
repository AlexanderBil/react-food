//  Страница одной категории
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {getFilteredCategory} from '../api';

function Category() {
  const {name} = useParams;
  const [meals, setMe]

  useEffect(() => {
      getFilteredCategory(name)
  }, [name])
}

export {Category}