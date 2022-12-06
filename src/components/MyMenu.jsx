import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import NavBarBtn from '../components/NavBarBtn'
import {bubble as Menu} from 'react-burger-menu';

import {MyContext} from '../context';

class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleRedirect(destination) {
    if (destination === "home") {
      this
        .props
        .history
        .push("/")
    }
  }
  setButtonState = (context, button) => {
    if (context.state.language === "en") {
      if (button === "italiano") {
        return false
      } else {
        return true
      }
    } else if (context.state.language === "it") {
      if (button === "italiano") {
        return true
      } else {
        return false
      }
    } else {
      if (button === "italiano") {
        return true
      } else {
        return false
      }
    }
  };

  render() {
      return (
        <MyContext.Consumer>
          {(context) => (
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
              <a className="menu-item">
                <NavBarBtn
                  isActive={true}
                  buttonText={"HOME"}
                  buttonID={"home"}
                  route="/"
                  type="navigation"/>
              </a>
             
              <a className="menu-item">
                <NavBarBtn
                  isActive={true}
                  buttonText={"INFO & AVAILABILITY"}
                  buttonID={"prenotazioni"}
                  route="/prenotazioni"
                  type="navigation"/>
              </a>
             
              <a className="menu-item">
                <NavBarBtn
                  isActive={this.setButtonState(context, "italiano")}
                  buttonText={"ITALIANO"}
                  buttonID={"IT"}
                  clickAction={this.props.context.changeLanguage}
                  myData="it"
                  type="language"></NavBarBtn>
              </a>
              <a className="menu-item">
                <NavBarBtn
                  isActive={this.setButtonState(context, "english")}
                  buttonText={"ENGLISH"}
                  buttonID={"EN"}
                  clickAction={this.props.context.changeLanguage}
                  myData={"en"}
                  type="language"></NavBarBtn>
                  </a>
              
            </Menu>
          )}
        </MyContext.Consumer>
      );
  }
}

export default MyMenu;