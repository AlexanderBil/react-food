function MealList ({meals}){
  return(
      <div className="list">
          {meals.map(meal => (
              <Meal key = {idMeal} {...}/>
          ))}
      </div>
  )
}

export {MealList}