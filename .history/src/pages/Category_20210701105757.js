//  Страница одной категории
import {useParams} from 'react-router-dom';
import {get} from '../api';

function Category() {
  const {name} = useParams;
}

export {Category}