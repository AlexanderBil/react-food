function CategoryItem (props) {

    const {idCategory, str} = props;
    return(
       <div className = "card">
           {idCategory}
       </div>
    )
}

export {CategoryItem}