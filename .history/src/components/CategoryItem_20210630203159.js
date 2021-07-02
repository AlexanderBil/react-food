function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescri} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}