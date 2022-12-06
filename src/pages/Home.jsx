import React, {Component} from 'react';
import Header from '../components/Header';
import SocialSection from '../components/SocialSection';
import DolasillaStory from '../components/DolasillaStory';
import GoogleMap from "../components/GoogleMap";
import ImageGridContainer from '../components/ImageGridContainer';
import ApartmentFeatures from '../components/ApartmentFeatures';
import {MyContext} from '../context';
import Footer from '../components/Footer';
import GuestBook from '../components/GuestBook';
import {bubble as Menu} from 'react-burger-menu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ApartmentDescription from '../components/ApartmentDescription';
import MyMenu from '../components/MyMenu';
import Prenotazioni from './Prenotazioni';
import Partner from '../components/Partner';
import LinkUtili from '../components/LinkUtili';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidUpdate() {

  };

  render() {
    return (
      <MyContext.Consumer >
        {(context) => (
          <React.Fragment>
            <div id="outer-container">
              <MyMenu disableAutoFocus pageWrap="page-wrap" position="home" context={context }></MyMenu>
              <main id="page-wrap">
                <React.Fragment>
                  <Header/>
                  <SocialSection/>
                  <ApartmentDescription/>
                  <GuestBook/>
                  <Partner/>
                 <ImageGridContainer/> 
                  <GoogleMap/>
                  <LinkUtili/>
                  <ApartmentFeatures/>
                  <DolasillaStory/>
                  <Footer/>
                </React.Fragment>
              </main>
            </div>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Home;