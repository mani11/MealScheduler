import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import sortMeals from '../sorter/meals';

export const Meals = ((props) => {
    return (<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
 
  <ol id="list"> 
                { props.meals.map(g => {
                   return <div>
                    <li className="morning">Breakfast for {g[0]} on {g[1]}</li>
                    <li className="afternoon">Lunch for {g[0]} on {g[1]}</li>
                    <li className="night">Dinner for {g[0]} on {g[1]}</li>
                    </div>
                })
                }
                </ol>
        </div>);
});
//export default Meals;

const mapStateToProps =  (state) => {

    return {
      meals:sortMeals(state.guestList)
    };
  
  };

  export default connect(mapStateToProps)(Meals);
