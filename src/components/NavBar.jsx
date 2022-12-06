import React, {Component} from 'react';
import '../App.css';
import NavBarBtn from './NavBarBtn';
import {MyContext} from '../context';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

class NavBar extends Component {

  state = {
    navClasses: ["navbar", "navbar-expand-lg", "navbar-light", "bg-color1", "justify-content-end"].join(" "),
    modified: false
  };

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
          <React.Fragment>
            <Navbar collapseOnSelect expand="lg" className={"bg-color1"} variant="dark">
              <Navbar.Brand>Apartments Dolasilla</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav" className={"text-center"}>
                <Nav className={"mr-auto"}>
                  <Nav.Link>
                    <NavBarBtn
                      isActive={true}
                      buttonText={"HOME"}
                      buttonID={"home"}
                      route="/"
                      type="navigation"></NavBarBtn>
                  </Nav.Link>
                  <Nav.Link>
                    <NavBarBtn
                      isActive={true}
                      buttonText={"PORTAL"}
                      buttonID={"portal"}
                      route="/login"
                      type="navigation"></NavBarBtn>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link>
                    <NavBarBtn
                      isActive={this.setButtonState(context, "italiano")}
                      buttonText={"ITALIANO"}
                      buttonID={"IT"}
                      clickAction={this.props.context.changeLanguage}
                      myData="it"
                      type="language"></NavBarBtn>
                  </Nav.Link>
                  <Nav.Link eventKey={2}>
                    <NavBarBtn
                      isActive={this.setButtonState(context, "english")}
                      buttonText={"ENGLISH"}
                      buttonID={"EN"}
                      clickAction={this.props.context.changeLanguage}
                      myData={"en"}
                      type="language"></NavBarBtn>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
};

export default NavBar;
