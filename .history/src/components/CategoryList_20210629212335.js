function CategoryList ({catalog = []}) {

    
    return(
       <div className = "list">
           {catalog.map()}
       </div>
    )
}

export {CategoryList}