import {CategoryItem} from './CategoryItem'

function CategoryList ({catalog = []}) {

    
    return(
       <div className = "list">
           {catalog.map(el => (
               <CategoryItem key = {}/>
           ) )}
       </div>
    )
}

export {CategoryList}