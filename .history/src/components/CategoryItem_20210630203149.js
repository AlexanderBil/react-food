function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCatego} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}