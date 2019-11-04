import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addMeal } from '../action/meals';

export class Bookings extends Component {
  constructor(props){
    super(props)
    this.state={
       usernames:"",
       dates:"",
    }
  }
  handleGuestInfo = (event) => {
    let guestName = event.target.value;
    if(guestName){
    this.setState(prevState => {
      prevState.usernames = guestName;
    });
      }
  }
  handleDateInfo = (event) => {
    let dateRange = event.target.value;
    this.setState(prevState => {
      prevState.dates = dateRange;
    });
  }

  listMeals = () => {
    const finalArray = [];
    const errorList = [];
    const startDate = [];
    const endDate = [];
    const guests = this.state.usernames.split("\n").filter(g => g !== "" );
    const dates = this.state.dates.split("\n").filter(d => d !== "");
    for(let j=0;j<dates.length;j++){
        let tempArr = dates[j].split("to");
        let start = tempArr[0].trim();
        let end = tempArr[1].trim();
        startDate.push(start);
        endDate.push(end);
     
    }
    for(let i=0;i<guests.length;i++){
    let guest = guests[i];
    let start = startDate[i];
    let end = endDate[i];
    if(Date.parse(start) < Date.parse(end)){
    finalArray.push([guest,start]);
    finalArray.push([guest,end]);
    }
    else{
      errorList.push(guest);
    }
    }
    this.props.dispatch(addMeal(finalArray,errorList));
  }

    render() {
        return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the names (one name per line)"
          onChange={this.handleGuestInfo}
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each name (one range per line)"
          onChange={this.handleDateInfo}
        />
        <Button variant="outlined" color="primary" className="block-center" onClick={this.listMeals}>Get Meals Schedule</Button>
        </div>);
    }
}

export default connect()(Bookings);
