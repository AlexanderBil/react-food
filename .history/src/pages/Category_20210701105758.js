//  Страница одной категории
import {useParams} from 'react-router-dom';
import {getFilteredCategory} from '../api';

function Category() {
  const {name} = useParams;
}

export {Category}