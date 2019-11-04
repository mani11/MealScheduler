export const addMeal = (guestList=[],errorList=[]) => (
  {
  type:"GET_MEAL_SCHEDULE",
  info:{
    guestList,
    errorList
  }
});

// export const addError = (errorList=[]) => (
//   {
//     type:"GET_ERROR_LIST",
//     invalidGuest:{
//       errorList
//     }
//   }

// )
