import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';
import configStore from './store/configureStore';
import { Provider } from "react-redux";



const store = configStore();

class App extends Component {


    render() {
        return (
            <Provider store={ store }>
            <div className="container-fluid">
            <center>
                <h2>Menu scheduler</h2>
            </center>
            <div className="container">
                <Bookings></Bookings>
                <Error></Error>
                <Meals></Meals>
            </div>
        </div>
        </Provider>
        );
    }
}

export default App;