import React, { Component } from 'react';
import '../App.css';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: this.props.inputType,
            placeholder: this.props.inputPlaceholder,
            classes: {
                formInput: ["form-control"].join(" "),
            },
            inputDisabled: this.props.inputDisabled,
            inputValue: this.props.inputValue
         }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.inputValue !== this.state.inputValue) {
            this.setState({ inputValue: nextProps.inputValue})
        }
      };

    render() { 
        return (
            <div>
              {(() => {
                  if (this.state.inputDisabled === "true"){
                      return(
                        <input type={this.state.type} placeholder={this.state.placeholder} className={this.state.classes.formInput + " " + this.props.myClasses} onChange={this.props.inputChange} value={this.state.inputValue} name={this.props.inputName} min={this.props.minDate} readOnly={true}/>
                      )
                  }
                  return(
                    <input type={this.state.type} placeholder={this.state.placeholder} className={this.state.classes.formInput + " " + this.props.myClasses} onChange={this.props.inputChange} value={this.state.inputValue} name={this.props.inputName} min={this.props.minDate}/>
                  )
                  
              })()}
            </div>
              
        );
    }
}
 
export default FormInput;