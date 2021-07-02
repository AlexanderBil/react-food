import {}

function CategoryItem (props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    return(
            <div className="card">
        <div class="card-image">
          <img src={strCategoryThumb} alt = {strCategory}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>{strCategoryDescription}</p>
        </div>
      </div>

    )
}

export {CategoryItem}