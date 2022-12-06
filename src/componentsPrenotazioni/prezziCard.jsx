import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getEvents} from './gcal'
import "react-big-calendar/lib/css/react-big-calendar.css";

//TODO: change the list of elements to be in date order
class PrezziCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventPrenotazioni: []
    }
  }

  componentWillMount() {
    getEvents((events) => {
      this.getBookingsList(events);
    })
  }

  //Formatting the events for the list view
  getBookingsList = (events) => {
    let formattedBookings = [];
    events.map(event => {
      const formatter = new Intl.DateTimeFormat('it', {month: 'short'});
      if (event.title === "Airbnb (Not available)") {
        //Discard it, this is not a booking
      } else {
        let newEvent = {
          title: event.title,
          startDay: new Date(event.start).getDate(),
          startMonth: formatter.format(new Date(event.start)),
          endDay: new Date(event.end).getDate(),
          endMonth: formatter.format(new Date(event.end))
        }
        formattedBookings.push(newEvent);
      }
      this.setState({eventPrenotazioni: formattedBookings});
    });
  }

  render() {
    return (
      <div className="bookings-cards col-md-4" style={{marginBottom: "30px"}}>
        <div className="card p-3">
          <div
            className="card-body overflow-auto"
            style={{
            height: "655px"
          }}>
            <h5 className="card-title">Prenotazioni</h5>
            {this.state.eventPrenotazioni.map(event => {
                return (
                  <div className="row" key={Math.random()}>
                    <div className="card" style={{ width: "100%", marginTop: "5px"}}>
                      <div className="card-body" style={{paddingBottom: "5px"}}>
                        <h6 className="card-title" style={{fontWeight: "bold"}}>{event.title}</h6>
                        <p className="card-text" style={{ textTransform: "capitalize"}}>
                          {event.startDay}{" "}{event.startMonth} {" - "}
                          {event.endDay}{" "}{event.endMonth}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PrezziCard;
