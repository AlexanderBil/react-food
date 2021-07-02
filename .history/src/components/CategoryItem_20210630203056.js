function CategoryItem (props) {

    const {idCategory, strCategory} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}