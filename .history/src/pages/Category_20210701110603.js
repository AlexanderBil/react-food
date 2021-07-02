//  Страница одной категории
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {getFilteredCategory} from '../api';

function Category() {
  const {name} = useParams;
  

  useEffect(() => {
      getFilteredCategory(name)
  }, [name])
}

export {Category}