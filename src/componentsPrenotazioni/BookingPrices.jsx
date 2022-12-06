import React, {Component} from 'react';
import {MyContext} from '../context';
import '../App.css';
import {Redirect} from 'react-router-dom';
import MyMenu from '../components/MyMenu';
import ConfermaBooking from '../componentsPrenotazioni/ConfermaBooking';
import {Modal, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BookingPrices extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div
              className="h-50 d-flex justify-content-center align-items-center bg-white text-color1 mb-5 mt-5">
              <div className="col-md-10 text-center">
              {(() => {
                      if (context.state.language == "en"){
                        return <h1 style={{
                          marginBottom: "20px"
                        }}>Our prices [per day]</h1>
                      } else {
                        return <h1 style={{
                          marginBottom: "20px"
                        }}>I nostri prezzi [al giorno]</h1>
                      }
              })()}
                
                <div
                  className="row"
                  style={{
                  marginBottom: "10px"
                }}>
                  <div className="col-md-4">
                    <div
                      className="card border-0 bg-dark p-4"
                      style={{
                      marginBottom: "10px"
                    }}>
                      <div className="card-title align-self-center">
                        <h3>180€</h3>
                      </div>
                      <div className="card-body p-4 text-white text-center">
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>1/10</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>30/11</b><br/>
                         <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>1/05</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>31/05</b><br/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card border-0 bg-dark p-4"
                      style={{
                      marginBottom: "10px"
                    }}>
                      <div className="card-title align-self-center">
                        <h3>220€</h3>
                      </div>
                      <div className="card-body p-4 text-white text-center">
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>1/09</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>30/09</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-md 4">
                    <div
                      className="card border-0 bg-dark p-4"
                      style={{
                      marginBottom: "10px"
                    }}>
                      <div className="card-title align-self-center">
                        <h3>280€</h3>
                      </div>
                      <div className="card-body p-4 text-white text-center">
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>1/12</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>24/12</b>
                        <br/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>01/06</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>30/06</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="card border-0 bg-dark p-4"
                      style={{
                      marginBottom: "10px"
                    }}>
                      <div className="card-title align-self-center">
                        <h3>320€</h3>
                      </div>
                      <div className="card-body p-4 text-white text-center">
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>01/04</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>16/04</b>
                        <br/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>01/07</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>31/07</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card border-0 bg-dark p-4"
                      style={{
                      marginBottom: "10px"
                    }}>
                      <div className="card-title align-self-center">
                        <h3>360€</h3>
                      </div>
                      <div className="card-body p-4 text-white text-center">
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>08/01</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>31/01</b>
                        <br/>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-md 4">
                    <div
                      className="card border-0 bg-dark p-4"
                      style={{
                      marginBottom: "10px"
                    }}>
                      <div className="card-title align-self-center">
                        <h3>440€</h3>
                      </div>
                      <div className="card-body p-4 text-white text-center">
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>24/12</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>07/01</b>
                        <br/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>01/02</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>31/03</b>
                        <br/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>01/08</b><FontAwesomeIcon icon="arrow-right"/>
                        <b
                          style={{
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}>31/08</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default BookingPrices;