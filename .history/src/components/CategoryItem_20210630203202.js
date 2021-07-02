function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescriptio} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}