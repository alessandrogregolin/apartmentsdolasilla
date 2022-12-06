import React, { Component } from "react";
import { MyContext } from "../context";
import "../App.css";
import { withRouter, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bubble as Menu } from "react-burger-menu";
import { Route } from "react-router-dom";
import MyMenu from "../components/MyMenu";
import moment from "moment";
import BookingForm from "../components/BookingForm";

class ConfermaBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
    };
  }




  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            {(() => {
              if (context.state.language === "en") {
                return (
                  <div
                    className={"bg-white d-flex justify-content-center align-items-center prenotazioniHeader text-center"}
                    style={{ marginTop: "40px", marginBottom: "30px" }}
                    id="bookingConfirmation">
                    <div className="col-md-10 text-white bg-dark text-center p-5">
                      <h3>
                         Write an email to <a style={{color: "#fd5c63"}} href="mailto:info@apartmentsdolasilla.it">info@apartmentsdolasilla.it </a>
                         to request information or book your holiday, we will answer shortly
                      </h3>
                    </div>
                    {/*
                        <div className="col-md-10 text-white bg-dark text-center p-5">
                          <h2>Continue your booking</h2>
                          <p>Congratulations, the dates you have chosen are available, compile the data in the form below
                            and we will contact you to confirm your booking</p>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <BookingForm checkInDate={this.state.checkInDate} checkOutDate={this.state.checkOutDate} key={this.state.checkInDate} myAction={this.waitForUploadSuccess}/>
                                </div>
                            </div>
                        </div>
                        */}
                  </div>
                );
              } else if (context.state.language === "it") {
                return (
                  <div
                    className={"bg-white d-flex justify-content-center align-items-center prenotazioniHeader text-center"}
                    style={{ marginTop: "40px", marginBottom: "30px" }}
                    id="bookingConfirmation">
                    <div className="col-md-10 text-white bg-dark text-center p-5">
                      <h3>
                        Scrivi una mail a{" "}
                        <a style={{color: "#fd5c63"}} href="mailto:info@apartmentsdolasilla.it">info@apartmentsdolasilla.it</a> per richiedere informazioni o una prenotazione,
                        ti risponderemo a brevissimo
                      </h3>
                    </div>
                    {/*
                        <div className="col-md-10 text-white bg-dark text-center p-5">
                          <h2>Continua la tua prenotazione</h2>
                          <p>Congratulazioni, le date da lei scelte sono disponibili, compili i dati nei
                            campi richiesti e la contatteremo per la conferma della sua prenotazione</p>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <BookingForm checkInDate={this.state.checkInDate} checkOutDate={this.state.checkOutDate} key={this.state.checkInDate} myAction={this.waitForUploadSuccess}/>
                                </div>
                            </div>
                        </div>
                          */}
                  </div>
                );
              } else {
                return (
                  <div
                    className={"bg-white d-flex justify-content-center align-items-center prenotazioniHeader text-center"}
                    style={{ marginTop: "40px", marginBottom: "30px" }}
                    id="bookingConfirmation">
                    <div className="col-md-10 text-white bg-dark text-center p-5">
                      <h3>
                        Scrivi una mail a{" "}
                        <a style={{color: "#fd5c63"}} href="mailto:info@apartmentsdolasilla.it">info@apartmentsdolasilla.it</a> per richiedere informazioni o una prenotazione,
                        ti risponderemo a brevissimo
                      </h3>
                    </div>
                    {/*
                        <div className="col-md-10 text-white bg-dark text-center p-5">
                          <h2>Continua la tua prenotazione</h2>
                          <p>Congratulazioni, le date da lei scelte sono disponibili, compili i dati nei
                            campi richiesti e la contatteremo per la conferma della sua prenotazione</p>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <BookingForm checkInDate={this.state.checkInDate} checkOutDate={this.state.checkOutDate} myAction={this.waitForUploadSuccess}/>
                                </div>
                            </div>
                        </div>
                          */}
                  </div>
                );
              }
            })()}
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ConfermaBooking;
