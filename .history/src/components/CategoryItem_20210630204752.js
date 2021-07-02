function CategoryItem (props) {

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    return(
            <div class="card">
        <div class="card-image">
          <img src={strCategoryThumb} alt = {strCategory}>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>

    )
}

export {CategoryItem}