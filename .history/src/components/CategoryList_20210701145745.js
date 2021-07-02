import {CategoryItem} from './CategoryItem';
import {Link, useHistory} from 'react-router-dom';

function CategoryList ({catalog = []}) {

    
    return(
       <div className = "list">
           {catalog.map(el => (
               <CategoryItem key = {el.idCategory} {...el}/>
           ) )}
       </div>
    )
}

export {CategoryList}