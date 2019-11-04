export const addMeal = (guestList=[],errorList=[]) => (
  {
  type:"GET_MEAL_SCHEDULE",
  info:{
    guestList,
    errorList
  }
});
