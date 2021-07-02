import {CategoryItem} from './CategoryItem';

function CategoryList ({catalog = []}) {

    return(
        <>
         <button onClick = {goBack} className = 'btn'>Go Back</button>
               <div className = "list">
           {catalog.map(el => (
               <CategoryItem key = {el.idCategory} {...el}/>
           ) )}
       </div>
        </>

    )
}

export {CategoryList}