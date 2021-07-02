function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}