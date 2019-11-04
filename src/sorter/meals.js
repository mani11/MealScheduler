const sortMeals = (meals)=>{

  const result = meals.sort((a,b)=>{
  return Date.parse(a[1]) < Date.parse(b[1]) ?-1:1;
  })

  return result;

}

export default sortMeals;