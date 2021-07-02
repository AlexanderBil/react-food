function CategoryItem (props) {

    const {idCategory, strCategory, str} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}