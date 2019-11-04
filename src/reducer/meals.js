const mealsSchedule ={
  guestList:[],
  errorList:[]
}

const mealReducer = (state = mealsSchedule,action)=>{
  switch(action.type){

    case "GET_MEAL_SCHEDULE":
      return {
        guestList:action.info.guestList,
        errorList:action.info.errorList

      }

    default:
     return state;

  }
}

export default mealReducer;
