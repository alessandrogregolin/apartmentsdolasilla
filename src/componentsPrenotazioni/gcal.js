import request from 'superagent'
import moment from 'moment';

const CALENDAR_ID = '36pm76mlt8rqnvjt215mq4t5o0@group.calendar.google.com'
const API_KEY = 'AIzaSyD1A2vCcVqe1Vz5I2XMqLpqHBgRffWT3mw'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents(callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON
          .parse(resp.text)
          .items
          .map((event) => {
            var dateOffset = (24 * 60 * 60 * 1000) * 1; //1 days
            var endDate = new Date(event.end.date);
            var startDate = new Date(event.start.date);
            endDate.setTime(endDate.getTime() - dateOffset);
            endDate.setHours(endDate.getHours() - 2);
            startDate.setHours(startDate.getHours() - 2);
            console.log(startDate.getFullYear())
            if (startDate.getFullYear() == 2020){
              console.log("year is 2020")
              startDate.setTime(startDate.getTime() + dateOffset)
              endDate.setTime(endDate.getTime()+dateOffset)
            } else if (startDate.getFullYear() === 2019 && endDate.getFullYear() === 2020){
              startDate.setTime(startDate.getTime() + dateOffset)
              endDate.setTime(endDate.getTime() + dateOffset)
            }
            //startDate.setTime(startDate.getTime() - dateOffset);
            events.push({
              state: 'unavailable',
              range: moment.range(startDate, endDate)
            })
          })
        callback(events)
      }
    })
}