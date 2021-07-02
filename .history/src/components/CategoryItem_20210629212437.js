function CategoryItem ({catalog = []}) {

    
    return(
       <div className = "list">
           {catalog.map(el => () )}
       </div>
    )
}

export {CategoryItem}