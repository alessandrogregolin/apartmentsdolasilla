import React, {Component} from 'react';
import * as variables from '../variables.json';
import FormInput from './FormInput';
import '../App.css';
import {MyContext} from '../context';
import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';
import emailjs from 'emailjs-com';
import TextArea from '../components/TextArea';
const websiteVariables = variables.default;

class BookingForm extends Component {
  //initialising a firebase instance to use in the class
  constructor(props) {
    super(props);

    this.state = {
      classes: {
        form: ["p-4", "section-light", "bg-custom-form"].join(" "),
        h4: ["mb-3", "text-center", "text-color1", "custom-title-p"].join(" "),
        errorH5: ["error-label", "text-center"].join(" "),
        formGroup: ["form-group"].join(),
        formInput: "form-control",
        formButton: [
          "btn",
          "mt-4",
          "btn-block",
          "p-2",
          "bg-color1",
          "text-white"
        ].join(" ")
      },
      loading: false,
      fullname: "",
      email: "",
      checkInDate: this.props.checkInDate,
      checkOutDate: this.props.checkOutDate,
      peopleNum: 2,
      minCheckOutDate: this.formatDate("minCheckOut"),
      error: "",
      note: "",
      bookingID: null,
      upload: "null"
    }
  }

    componentWillReceiveProps(nextProps){
    if (nextProps.checkInDate !== this.state.checkInDate) {
        this.setState({ checkInDate: nextProps.checkInDate,
          checkOutDate: nextProps.checkOutDate });
        
    } else if (nextProps.checkOutDate !== this.state.checkOutDate) {
        this.setState({ checkInDate: nextProps.checkInDate, checkOutDate: nextProps.checkOutDate });
       
    }
  }

  componentWillMount() {
    emailjs.init("user_kccLwKQAVcHsllq8jgExu")
  }

  //formatting dates
  formatDate = (type) => {
    if (type === "tomorrow") {
      var date = new Date(this.props.checkInDate);
      var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0];
      return dateString;

    } else if (type === "checkout") {

      var tomorrow = new Date(this.props.checkOutDate);
      var dateString = new Date(tomorrow.getTime() - (tomorrow.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0];
      return dateString;

    }
  }

  //Updating values from inouts in the state
  updateInput = e => {
    if (e.target.name === "checkInDate") {
      var tomorrow = new Date(e.target.value);
      tomorrow.setDate(tomorrow.getDate() + 1);
      var dateString = new Date(tomorrow.getTime() - (tomorrow.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0];
      this.setState({
        [e.target.name]: e.target.value,
        checkOutDate: dateString
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }

  //confirming a request for a booking
  //TODO: here check also that all fields are completed correctly
  createBooking = e => {
    e.preventDefault();
    var numOfPeople = this.state.peopleNum;

    var templateParams = {
      "fromName": this.state.fullname,
      "checkInDate": new Date(this.state.checkInDate).toDateString(),
      "checkOutDate": new Date(this.state.checkOutDate).toDateString(),
      "numOfPeople": numOfPeople.toString(),
      "senderEmail": this.state.email,
      "note": this.state.note
    };
    var service_id = "default_service";
    var template_id = "richiesta_dolasilla";
    let self = this;
    emailjs
      .send(service_id, template_id, templateParams)
      .then(function (response) {
        console.log("successfully sent email");
        self
          .props
          .myAction("success");
        self.setState({
          fullname: "",
          email: "",
          peopleNum: 2,
          error: "",
          upload: "success",
          note: ""
        })
      }, function (error) {
      alert("la richiesta non è andata a buon fine, riprova più tardi");
      console.log(error);
      });
  };

  // TODO: render a modal showing that the bookign has been sent and the details,
  // send these details via email
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            {(() => {
              if (context.state.language === 'en') {
                return (
                  <form className={this.state.classes.form} onSubmit={this.createBooking}>
                    <h5
                      className={this.state.classes.errorH5}
                      style={this.state.error === ""
                      ? {
                        display: "none"
                      }
                      : {
                        display: "block"
                      }}>{translationEN.bookingForm.error}</h5>
                    <div className={this.state.classes.formGroup}>
                      < label style={{
                        color: "#fd5c63"
                      }}>{translationEN.bookingForm.labelName}</label>
                      <FormInput
                        inputType="text"
                        inputPlaceholder="Type here"
                        inputChange={this.updateInput}
                        inputValue={this.state.fullname}
                        inputName={"fullname"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>Email</label>
                      <FormInput
                        inputType="email"
                        inputPlaceholder="Type here"
                        inputChange={this.updateInput}
                        inputValue={this.state.email}
                        inputName={"email"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationEN.bookingForm.labelCheckIn}</label>
                      <FormInput
                        inputType="date"
                        inputDisabled="true"
                        inputChange={this.updateInput}
                        inputValue={this.state.checkInDate}
                        inputName={"checkInDate"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationEN.bookingForm.labelCheckOut}</label>
                      <FormInput
                        inputType="date"
                        inputChange={this.updateInput}
                        inputDisabled="true"
                        inputValue={this.state.checkOutDate}
                        inputName={"checkOutDate"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationEN.bookingForm.labelPeople}</label>
                      <FormInput
                        inputType="number"
                        inputPlaceholder="2"
                        inputChange={this.updateInput}
                        inputValue={this.state.peopleNum}
                        inputName={"peopleNum"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>Note</label>
                      <TextArea inputChange={this.updateInput} inputPlaceholder="Type here any additional request" inputName={"note"}/>
                    </div>
                    <button className={this.state.classes.formButton} type="submit">
                      <b>{translationEN.bookingForm.b}</b>
                    </button>
                  </form>
                );
              } else if (context.state.language === 'it') {
                return (
                  <form className={this.state.classes.form} onSubmit={this.createBooking}>
                    <h5
                      className={this.state.classes.errorH5}
                      style={this.state.error === ""
                      ? {
                        display: "none"
                      }
                      : {
                        display: "block"
                      }}>{translationIT.bookingForm.error}</h5>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelName}</label>
                      <FormInput
                        inputType="text"
                        inputPlaceholder="Type here"
                        inputChange={this.updateInput}
                        inputValue={this.state.fullname}
                        inputName={"fullname"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>Email</label>
                      <FormInput
                        inputType="email"
                        inputPlaceholder="Type here"
                        inputChange={this.updateInput}
                        inputValue={this.state.email}
                        inputName={"email"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelCheckIn}</label>
                      <FormInput
                        inputType="date"
                        inputChange={this.updateInput}
                        inputValue={this.state.checkInDate}
                        inputDisabled="true"
                        inputName={"checkInDate"}
                        minDate={this.state.checkInDate}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelCheckOut}</label>
                      <FormInput
                        inputType="date"
                        inputChange={this.updateInput}
                        inputValue={this.state.checkOutDate}
                        inputDisabled="true"
                        inputName={"checkOutDate"}
                        minDate={this.state.minCheckOutDate}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelPeople}</label>
                      <FormInput
                        inputType="number"
                        inputPlaceholder="2"
                        inputChange={this.updateInput}
                        inputValue={this.state.peopleNum}
                        inputName={"peopleNum"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>Note</label>
                      <TextArea inputChange={this.updateInput} inputPlaceholder="Digita qui qualsiasi richiesta aggiuntiva" inputName={"note"}/>
                    </div>
                    <button className={this.state.classes.formButton} type="sumbit">
                      <b>{translationIT.bookingForm.b}</b>
                    </button>
                  </form>
                );
              } else {
                return (
                  <form className={this.state.classes.form} onSubmit={this.createBooking}>
                    <h5
                      className={this.state.classes.errorH5}
                      style={this.state.error === ""
                      ? {
                        display: "none"
                      }
                      : {
                        display: "block"
                      }}>{translationIT.bookingForm.error}</h5>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelName}</label>
                      <FormInput
                        inputType="text"
                        inputPlaceholder="Type here"
                        inputChange={this.updateInput}
                        inputValue={this.state.fullname}
                        inputName={"fullname"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>Email</label>
                      <FormInput
                        inputType="email"
                        inputPlaceholder="Type here"
                        inputChange={this.updateInput}
                        inputValue={this.state.email}
                        inputName={"email"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelCheckIn}</label>
                      <FormInput
                        inputType="date"
                        inputChange={this.updateInput}
                        inputValue={this.formatDate("tomorrow")}
                        inputDisabled="true"
                        inputName={"checkInDate"}
                        minDate={this.state.checkInDate}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelCheckOut}</label>
                      <FormInput
                        inputType="date"
                        inputChange={this.updateInput}
                        inputValue={this.formatDate("checkout")}
                        inputDisabled="true"
                        inputName={"checkOutDate"}
                        minDate={this.state.minCheckOutDate}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>{translationIT.bookingForm.labelPeople}</label>
                      <FormInput
                        inputType="number"
                        inputPlaceholder="2"
                        inputChange={this.updateInput}
                        inputValue={this.state.peopleNum}
                        inputName={"peopleNum"}/>
                    </div>
                    <div className={this.state.classes.formGroup}>
                      <label
                        style={{
                        color: "#fd5c63"
                      }}>Note</label>
                      <TextArea inputChange={this.updateInput} inputPlaceholder="Digita qui qualsiasi richiesta aggiuntiva" inputName={"note"}/>
                    </div>

                    <button className={this.state.classes.formButton} type="submit">
                      <b>{translationIT.bookingForm.b}</b>
                    </button>
                  </form>
                );
              }
            })()
}
          </React.Fragment>
        )}
      </MyContext.Consumer>

    );
  }
}

export default BookingForm;