import {} from 

function CategoryList ({catalog = []}) {

    
    return(
       <div className = "list">
           {catalog.map(el => () )}
       </div>
    )
}

export {CategoryList}