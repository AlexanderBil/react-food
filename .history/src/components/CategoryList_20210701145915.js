import {CategoryItem} from './CategoryItem';
import {Link, useHistory} from 'react-router-dom';

function CategoryList ({catalog = []}) {

    const {goBack} = useHistory();  
    return(

        <>
        
               <div className = "list">
           {catalog.map(el => (
               <CategoryItem key = {el.idCategory} {...el}/>
           ) )}
       </div>
        </>

    )
}

export {CategoryList}