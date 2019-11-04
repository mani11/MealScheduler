import {createStore, combineReducers} from 'redux';
import mealReducer from '../reducer/meals';


export default ()=>{
  const store = createStore(mealReducer);

   return store;
}

