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
        section: ["text-center", "my-5"].join(),
        colMd12: ["col-md-12", "text-center", "justify-content-center", "features-custom"].join(" "),
        h2: ["h1-responsive", "font-weight-bold", "my-5", "text-color1", "features-h2-custom"].join(" "),
        p1: ["lead", "grey-text", "w-responsive", "mx-6", "mb-5"].join(" "),
        row: "row",
        colMd3: "col-md-3",
        fa: ["fa-3x", "text-color1"].join(" "),
        h5: ["font-weight-bold", "my-4"].join(" "),
        p2: ["grey-text", "mb-md-0", "mb-5"].join(" "),
        button: ["btn", "active-button", "btn-outline-primary", "ml-2", "mr-2", "btn-features"].join(" "),
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
                      <h2 className={this.state.classes.h2}>{translationEN.apartmentFeatures.h2}</h2>
                      <p className={this.state.classes.p1}>{translationEN.apartmentFeatures.p1}</p>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'skiing']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationEN.apartmentFeatures.skiing.h5}</h5>
                          <p className={this.state.classes.p2}>{translationEN.apartmentFeatures.skiing.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'hiking']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationEN.apartmentFeatures.walking.h5}</h5>
                          <p className={this.state.classes.p2}>{translationEN.apartmentFeatures.walking.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'biking']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationEN.apartmentFeatures.biking.h5}</h5>
                          <p className={this.state.classes.p2}>{translationEN.apartmentFeatures.biking.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'mountain']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationEN.apartmentFeatures.more.h5}</h5>
                          <p className={this.state.classes.p2 + " more-text"}>{translationEN.apartmentFeatures.more.p2}</p>
                        </div>
                      </div>
                      <div className={this.state.classes.row + " mt-5"}>
                        <div className={this.state.classes.colMdButton}>
                          <a className={this.state.classes.button} href="https://www.valgardena.it/it/vacanze-estive-dolomiti/escursioni-val-gardena/">
                            <img style={{height: "30px", width:"50px", marginRight: "10px"}} src="logo_valgardena.png" alt="ValGardena"/>
                            <span>{translationEN.apartmentFeatures.button}</span>
                          </a>
                          <a className={this.state.classes.button} href="https://www.dolomitisuperski.com/it">
                            <img style={{height: "30px", width:"40px", marginRight: "5px"}} src="dolomiti_superski.jpg" alt="Dolimiti Superski"/>
                            <span>DOLOMITI SUPERSKI</span>
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
                      <h2 className={this.state.classes.h2}>{translationIT.apartmentFeatures.h2}</h2>
                      <p className={this.state.classes.p1}>{translationIT.apartmentFeatures.p1}</p>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'skiing']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.skiing.h5}</h5>
                          <p className={this.state.classes.p2}>{translationIT.apartmentFeatures.skiing.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'hiking']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.walking.h5}</h5>
                          <p className={this.state.classes.p2}>{translationIT.apartmentFeatures.walking.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'biking']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.biking.h5}</h5>
                          <p className={this.state.classes.p2}>{translationIT.apartmentFeatures.biking.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'mountain']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.more.h5}</h5>
                          <p className={this.state.classes.p2 + " more-text"}>{translationIT.apartmentFeatures.more.p2}</p>
                        </div>
                      </div>
                      <div className={this.state.classes.row + " mt-5"}>
                        <div className={this.state.classes.colMdButton}>
                          <a className={this.state.classes.button} href="https://www.valgardena.it/it/vacanze-estive-dolomiti/escursioni-val-gardena/">
                            <img style={{height: "30px", width:"50px", marginRight: "10px"}} src="logo_valgardena.png" alt="ValGardena"/>
                            <span>{translationIT.apartmentFeatures.button}</span>
                          </a>
                          <a className={this.state.classes.button} href="https://www.dolomitisuperski.com/it">
                            <img style={{height: "30px", width:"40px", marginRight: "5px"}} src="dolomiti_superski.jpg" alt="Dolimiti Superski"/>
                            <span>DOLOMITI SUPERSKI</span>
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
                      <h2 className={this.state.classes.h2}>{translationIT.apartmentFeatures.h2}</h2>
                      <p className={this.state.classes.p1}>{translationIT.apartmentFeatures.p1}</p>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'skiing']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.skiing.h5}</h5>
                          <p className={this.state.classes.p2}>{translationIT.apartmentFeatures.skiing.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'hiking']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.walking.h5}</h5>
                          <p className={this.state.classes.p2}>{translationIT.apartmentFeatures.walking.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'biking']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.biking.h5}</h5>
                          <p className={this.state.classes.p2}>{translationIT.apartmentFeatures.biking.p2}</p>
                        </div>
                        <div className={this.state.classes.colMd3}>
                          <FontAwesomeIcon icon={['fas', 'mountain']} className={this.state.classes.fa}/>
                          <h5 className={this.state.classes.h5}>{translationIT.apartmentFeatures.more.h5}</h5>
                          <p className={this.state.classes.p2 + " more-text"}>{translationIT.apartmentFeatures.more.p2}</p>
                        </div>
                      </div>
                      <div className={this.state.classes.row + " mt-5"}>
                        <div className={this.state.classes.colMdButton}>
                          <a className={this.state.classes.button} href="https://www.valgardena.it/it/vacanze-estive-dolomiti/escursioni-val-gardena/">
                            <img style={{height: "30px", width:"50px", marginRight: "10px"}} src="logo_valgardena.png" alt="ValGardena"/>
                            <span>{translationIT.apartmentFeatures.button}</span>
                          </a>
                          <a className={this.state.classes.button} href="https://www.dolomitisuperski.com/it">
                            <img style={{height: "30px", width:"40px", marginRight: "5px"}} src="dolomiti_superski.jpg" alt="Dolimiti Superski"/>
                            <span>DOLOMITI SUPERSKI</span>
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
