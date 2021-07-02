//  Страница одной категории
import {useParams} from 'react-router-dom';
import {api} from '../api';

function Category() {
  const {name} = useParams;
}

export {Category}