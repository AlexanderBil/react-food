function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, str} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}