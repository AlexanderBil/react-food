function MealList ({meals}){
  return(
      <div className="list">
          {meals.map(meal => (
              <Meal/>
          ))}
      </div>
  )
}

export {MealList}