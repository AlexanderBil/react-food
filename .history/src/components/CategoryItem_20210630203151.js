function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategory} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}