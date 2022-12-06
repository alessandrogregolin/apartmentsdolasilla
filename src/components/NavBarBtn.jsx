import React, {Component} from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useNavigate, Link } from "react-router-dom";

class MyComponent extends Component {
  constructor(props) {

    super(props);

    this.state = {
      id: this.props.buttonID,
      text: this.props.buttonText,
      activeButtonClasses: ["btn", "btn-sm", "active-button"].join(" "),
      navButton: ["btn", "inactive-button"].join(" "),
      inactiveButtonClasses: ["btn", "btn-sm", "inactive-button"].join(" "),
      route: this.props.route
    }
  }

  manageNavigation = () => {
    this.props.navigate(this.state.route);
  }

  getButtonInner = () => {
    if (this.props.buttonID === "prenotazioni") {
      return <span>
      <FontAwesomeIcon
        icon="address-book"
      />
      {' '}{this.state.text}
    </span>
    } else if (this.props.buttonID === "home") {
      return <span>
      <FontAwesomeIcon
        icon="home"
      />
      {' '}{this.state.text} 
      </span>
    } else {
      return this.state.text
    }
  };

  render() {
    if (this.props.type === "language") {
      return (
        <a
          className={this.props.isActive
          ? this.state.activeButtonClasses
          : this.state.inactiveButtonClasses}
          onClick={this.props.clickAction}
          data-language={this.props.myData}
          key={this.state.id}>{this.state.text}</a>
      )
    } else if (this.props.type === "navigation") {
      return (
        <a className={this.state.navButton} onClick={this.manageNavigation}>{this.getButtonInner()}</a>
      )
    };
  }
}

function NavBarBtn(props) {
  let navigate = useNavigate();
  return <MyComponent {...props} navigate={navigate} />
}

export default NavBarBtn;