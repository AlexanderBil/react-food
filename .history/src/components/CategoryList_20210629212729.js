import {CategoryItem} from './CategoryItem'

function CategoryList ({catalog = []}) {

    
    return(
       <div className = "list">
           {catalog.map(el => (
               <CategoryItem key = {el.id}/>
           ) )}
       </div>
    )
}

export {CategoryList}