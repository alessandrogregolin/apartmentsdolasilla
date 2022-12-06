import React, {Component} from 'react';
import '../App.css';
import {MyContext} from '../context';
import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';

class Footer extends Component {
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
                  <div className={"text-center justify-content-center bg-dark"}>
                    <div className={"container"}>
                      <div className={"row justify-content-center"}>
                        <div className={"col-md-4 p-3"}>
                          <h2 className={"mb-4 text-white"}>{translationEN.footer.h2}</h2>
                          <p className={"m-0"}>
                            <a href="tel:" className={"text-white"}></a>
                          </p>
                          <p>
                            <a href="mailto:info@apartmentsdolasilla.com" className={"text-white"}>info@apartmentsdolasilla.it</a>
                          </p>
                        </div>
                        <div className={"col-md-4 p-3"}>
                          <h2 className={"mb-4 text-white"}>Location</h2>
                          <p>
                            <a href="https://goo.gl/maps/tq3mGv3Xe2Z7AVw87" target="blank" className={"text-white"}>Strada Cir 16<br></br>39048 Selva di Val Gardena BZ, IT</a>
                          </p>
                        </div>
                      </div>
                      <div className={"row"}>
                        <div className={"col-md-12 mt-3"}>
                          <p className={"text-center text-muted"}>© Copyright 2019 Alessandro Gregolin - All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (context.state.language === 'it') {
                return (
                    <div className={"text-center justify-content-center bg-dark"}>
                    <div className={"container"}>
                      <div className={"row justify-content-center"}>
                        <div className={"col-md-4 p-3"}>
                          <h2 className={"mb-4 text-white"}>{translationIT.footer.h2}</h2>
                          <p className={"m-0"}>
                            <a href="tel:" className={"text-white"}></a>
                          </p>
                          <p>
                            <a href="mailto:info@apartmentsdolasilla.com" className={"text-white"}>info@apartmentsdolasilla.it</a>
                          </p>
                        </div>
                        <div className={"col-md-4 p-3"}>
                          <h2 className={"mb-4 text-white"}>Location</h2>
                          <p>
                            <a href="https://goo.gl/maps/tq3mGv3Xe2Z7AVw87" target="blank" className={"text-white"}>Strada Cir 16<br></br>39048 Selva di Val Gardena BZ, IT</a>
                          </p>
                        </div>
                      </div>
                      <div className={"row"}>
                        <div className={"col-md-12 mt-3"}>
                          <p className={"text-center text-muted"}>© Copyright 2019 Alessandro Gregolin - All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                    <div className={"text-center justify-content-center bg-dark"}>
                    <div className={"container"}>
                      <div className={"row justify-content-center"}>
                        <div className={"col-md-4 p-3"}>
                          <h2 className={"mb-4 text-white"}>{translationIT.footer.h2}</h2>
                          <p className={"m-0"}>
                            <a href="tel:" className={"text-white"}></a>
                          </p>
                          <p>
                            <a href="mailto:info@apartmentsdolasilla.com" className={"text-white"}>info@apartmentsdolasilla.it</a>
                          </p>
                        </div>
                        <div className={"col-md-4 p-3"}>
                          <h2 className={"mb-4 text-white"}>Location</h2>
                          <p>
                            <a href="https://goo.gl/maps/tq3mGv3Xe2Z7AVw87" target="blank" className={"text-white"}>Strada Cir 16<br></br>39048 Selva di Val Gardena BZ, IT</a>
                          </p>
                        </div>
                      </div>
                      <div className={"row"}>
                        <div className={"col-md-12 mt-3"}>
                          <p className={"text-center text-muted"}>© Copyright 2019 Alessandro Gregolin - All rights reserved.
                          </p>
                        </div>
                      </div>
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
  };
};

export default Footer;
