function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryTh} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}