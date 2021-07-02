function CategoryItem (props) {

    const {idCategory, strCate} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}