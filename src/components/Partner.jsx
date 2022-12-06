import React, {Component} from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MyContext} from '../context';
import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';
import * as variables from '../variables.json';
const websiteVariables = variables.default;

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
        <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            {(() => {
              if (context.state.language === 'en') {
                return (
                  <div className="container p-4">
                  <div className="col-md 12 text-center">
                    <a href="https://www.suedtirol.info/"><img src="img/partner/sudtirol.png" alt="Sudtirol" style={{width: "130px", height: "80px", marginRight: "30px"}}/></a>
                    <a href="http://www.herodolomites.com/"><img src="img/partner/hero.jpg" alt="Hero" style={{width: "80px", height: "80px"}}/></a>
                  </div>
              </div>
                );
              } else {
                return (
                  <div className="container p-4">
                      <div className="col-md 12 text-center">
                        <a href="https://www.suedtirol.info/"><img src="img/partner/sudtirol.png" alt="Sudtirol" style={{width: "130px", height: "80px", marginRight: "30px"}}/></a>
                        <a href="http://www.herodolomites.com/"><img src="img/partner/hero.jpg" alt="Hero" style={{width: "80px", height: "80px"}}/></a>
                      </div>
                  </div>
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

export default Partner;