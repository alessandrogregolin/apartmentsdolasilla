import React, {Component} from 'react';
import './App.css';
import {Route, Router, Routes} from 'react-router-dom'
import {MyContext} from './context';
import Home from './pages/Home'
import Prenotazioni from './pages/Prenotazioni';


class App extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Routes>
              <Route exact={true} path="/" element={<Home />}/>
              <Route exact={true} path="/prenotazioni" element={<Prenotazioni />}/>
            </Routes>
            
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default App;
