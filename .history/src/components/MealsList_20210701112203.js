import {} from './'

function MealList ({meals}){
  return(
      <div className="list">
          {meals.map(meal => (
              <Meal key = {idMeal} {...meal}/>
          ))}
      </div>
  )
}

export {MealList}