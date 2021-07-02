function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescr} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}