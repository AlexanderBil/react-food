function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}