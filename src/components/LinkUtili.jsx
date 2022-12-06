import React, {Component} from 'react';
import '../App.css';

import {MyContext} from '../context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';



class ApartmentFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: {
        section: ["text-center"].join(),
        colMd12: ["col-md-12", "text-center", "justify-content-center", "features-custom", "bg-color1"  ].join(" "),
        h2: ["h1-responsive", "font-weight-bold", "mb-3", "text-white", "features-h2-custom"].join(" "),
        p1: ["lead", "grey-text", "w-responsive", "mx-6", "mb-5"].join(" "),
        row: "row",
        colMd3: "col-md-3",
        fa: ["fa-3x", "text-color1"].join(" "),
        h5: ["font-weight-bold"].join(" "),
        p2: ["grey-text", "mb-md-0", "mb-5"].join(" "),
        button: ["btn", "active-button", "ml-2", "mr-2", "text-white", "linkUtiliBtn"].join(" "),
        colMdButton: ["col-md-12", "text-center", "justify-content-center"].join(" ")
      }
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            {(() => {
              if (context.state.language === 'en') {
                return (
                  <section className={this.state.classes.section}>
                    <div className={this.state.classes.colMd12}>
                      <h2 className={this.state.classes.h2}>Useful Links</h2>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMdButton}>
                        <a className={this.state.classes.button} href="http://www.val-gardena.com/it/live--e-webcams/page465.html">
                            Live Webcams
                          </a>
                          <a className={this.state.classes.button} href="http://www.val-gardena.com/it/stazioni-meteo/page466.html">
                            Live Meteo
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              } else if (context.state.language === 'it') {
                return (
                  <section className={this.state.classes.section}>
                    <div className={this.state.classes.colMd12}>
                      <h2 className={this.state.classes.h2}>Link Utili</h2>                  
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMdButton}>
                        <a className={this.state.classes.button} href="http://www.val-gardena.com/it/live--e-webcams/page465.html">
                            Live Webcams
                          </a>
                          <a className={this.state.classes.button} href="http://www.val-gardena.com/it/stazioni-meteo/page466.html">
                            Live Meteo
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              } else {
                return (
                  <section className={this.state.classes.section}>
                    <div className={this.state.classes.colMd12}>
                      <h2 className={this.state.classes.h2}>Link Utili</h2>
                      <div className={this.state.classes.row }>
                        <div className={this.state.classes.colMdButton}>
                          <a className={this.state.classes.button} href="http://www.val-gardena.com/it/live--e-webcams/page465.html">
                            Live Webcams
                          </a>
                          <a className={this.state.classes.button} href="http://www.val-gardena.com/it/stazioni-meteo/page466.html">
                            Live Meteo
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
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

export default ApartmentFeatures;
