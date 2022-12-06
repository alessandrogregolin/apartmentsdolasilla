import React, {Component} from 'react';
import {MyContext} from '../context';
import '../App.css';
import {withRouter, Redirect} from 'react-router-dom';
import MyMenu from '../components/MyMenu';
import {Modal, Button} from 'react-bootstrap';
import BookingPrices from '../componentsPrenotazioni/BookingPrices';
import ConfermaBooking from '../componentsPrenotazioni/ConfermaBooking';

class Prenotazioni extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookingConferma: true,
      checkIn: null,
      checkOut: null,
      classes: {
        formButton: [
          "btn",
          "mt-4",
          "btn-block",
          "p-2",
          "bg-color1",
          "text-white"
        ].join(" ")
      },
      uploadSuccess: null,
      show: false
    }
  };



  componentDidUpdate() {

  };


  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div id="outer-container">
            <MyMenu disableAutoFocus pageWrap="page-wrap" position="home" context={context}></MyMenu>
            <main id="page-wrap">
              <React.Fragment>
                <BookingPrices/>
                <ConfermaBooking/>
              </React.Fragment>
            </main>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Prenotazioni;