import React, {Component} from 'react';
import '../App.css';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.inputPlaceholder,
      classes: {
        formInput: ["form-control"].join(" ")
      }
    }
  }
  render() {
    return (
      <div>
        {(() => {
          return (<textarea
            placeholder={this.state.placeholder}
            className={this.state.classes.formInput + " " + this.props.myClasses}
            onChange={this.props.inputChange}
            name={this.props.inputName}/>)

        })()}
      </div>

    );
  }
}

export default TextArea;