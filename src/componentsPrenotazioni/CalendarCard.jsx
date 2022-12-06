import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import moment from 'moment';
import {getEvents} from './gcal'
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

class CalendarCard extends Component {

  localizer = momentLocalizer(moment);
  allViews = Object
    .keys(Views)
    .map(k => Views[k])

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      monthLabel: "",
      currentMonth: "",
      nextMonth: ""
    }
  }

  componentWillMount() {
    getEvents((events) => {
      this.formatEvents(events);
    })
  }

  componentDidMount() {
    let todayDate = new Date();
    const currentMonth = moment(todayDate)
      .endOf('month')
      .format('MMMM YYYY');
    const monthToday = moment(todayDate)
      .endOf('month')
      .format('MMM');
    let nextCurrentMonth = moment(todayDate)
      .add(1, 'month')
      .format('MMM');
    this.setState({monthLabel: currentMonth, currentMonth: monthToday, nextMonth: nextCurrentMonth});
  }

  formatEvents = (events) => {
    let formattedEvents = [];
    let id = -1;

    events.map(event => {
      var dateOffset = (24 * 60 * 60 * 1000) * 1; //5 days
      var myDate = new Date(event.end);
      myDate.setTime(myDate.getTime() - dateOffset);
      let eventFormat = {
        id: id + 1,
        start: new Date(event.start),
        end: myDate,
        title: (event.title),
        allDay: true
      };
      formattedEvents.push(eventFormat);
    })
    this.setState({events: formattedEvents})
  }

  ColoredDateCellWrapper = ({children}) => React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue'
    }
  })

  getCustomToolbar = (toolbar) => {
    this.toolbarDate = toolbar.date;
    const goToDayView = () => {
      toolbar.onViewChange('day');
    }
    const goToWeekView = () => {
      toolbar.onViewChange('week');
    }
    const goToMonthView = () => {
      toolbar.onViewChange('month');

      setTimeout(() => {
        this.setOffRangeDateStyle();
      }, 100)

    }

    const getCalendarEvents = (date) => {
      const {project} = this;
      const startDate = moment(date)
        .add(-1, 'month')
        .toDate();
      const endDate = moment(date)
        .endOf('month')
        .toDate();
      const currentMonth = moment(date)
        .endOf('month')
        .format('MMMM YYYY');
      const monthToday = moment(date)
        .endOf('month')
        .format('MMM');
      let nextCurrentMonth = moment(date)
        .add(1, 'month')
        .format('MMM');
      this.setState({monthLabel: currentMonth, currentMonth: monthToday, nextMonth: nextCurrentMonth});
    }

    const goToCurrent = () => {
      const now = new Date();
      toolbar
        .date
        .setMonth(now.getMonth());
      toolbar
        .date
        .setYear(now.getFullYear());
      toolbar.onNavigate('current');
    };

    const goToBack = () => {
      let mDate = toolbar.date;
      let newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
      toolbar.onNavigate('prev', newDate);
      getCalendarEvents(newDate);
    }
    const goToNext = () => {
      let mDate = toolbar.date;
      let newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
      toolbar.onNavigate('next', newDate);
      getCalendarEvents(newDate);
    }

    return (
      <div className="toolbar-container">
        <div className="navigation-buttons">
          <button className="btn btn-back" onClick={goToBack}>
            <FontAwesomeIcon icon="chevron-left" className="prev-icon"/>
          </button>
          <button className="btn btn-next" onClick={goToNext}>
            <FontAwesomeIcon icon="chevron-right" className="next-icon"/>
          </button>
          <label
            onClick={goToCurrent}
            style={{
            cursor: "pointer",
            marginRight: "5px",
            fontWeight: "bold"
          }}>Today</label>
          <label className='label-date text-center'>{this.state.monthLabel}</label>
        </div>

      </div >
    )
  }

  render() {
    return (
      <div className={"col-md-8 bookings-cards"}>
        <div className="card p-2">
          <div className="card-body">
            <h5 className="card-title">Disponibilità</h5>
            <div style={{
              width: "100%"
            }}>
              <Calendar
                events={this.state.events}
                step={60}
                showMultiDayTimes
                max={null}
                defaultDate={new Date()}
                components={{
                toolbar: this.getCustomToolbar,
                timeSlotWrapper: this.ColoredDateCellWrapper
              }}
                localizer={this.localizer}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CalendarCard;