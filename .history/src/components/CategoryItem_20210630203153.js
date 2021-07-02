function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDe} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}