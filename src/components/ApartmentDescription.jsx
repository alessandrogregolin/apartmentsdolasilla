import React, {Component} from 'react';
import '../App.css';

import {MyContext} from '../context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';

class ApartmentDescription extends Component {
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
                    <div className="container p-5">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row" style={{marginBottom: "10px"}}>
                            <div className="col-md-12 text-center">
                              <FontAwesomeIcon icon="home" className="fa-2x text-color1"/>
                              <br/>
                              <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>The apartment</h5>
                              <p style={{textAlign: "justify"}}>Dolasilla is a wonderful charme apartment in the most prestigious area of ​​Selva, ski-in ski-out directly on the Dantercepies - Selva - Ciampinoi connecting slope. Independent heating, ski room with heated personal locker, private garage, direct elevator from the garage. Every comfort, personalized check-in, no smoking, no pets. Dolasilla Charme Apartments is a member of the Selva Gardena Tourist Association and guarantees its guests a holiday of relax and quality.</p>
                            </div>
                          </div>
                          <div className="row">
                          <div className="col-md-4 text-center">
                              <FontAwesomeIcon icon="tram" className="fa-2x text-color1"/>
                              <br/>
                              <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>The location</h5>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 68 Sq m</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 5 guests</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 1 master bedroom with king size bed (180x200), 1 loft with 2 single beds (90x200)</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 5 sleeping accomodations</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 2 bathrooms</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 2 Smart TVs 50" - 45"</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Free WIFI</li>
                            </div>
                            <div className="col-md-4 text-center">
                              <FontAwesomeIcon icon="map-marker-alt" className="fa-2x text-color1"/>
                              <br/>
                              <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>Position</h5>
                              <p>Elegant condominium in the highest area of ​​Selva di Val Gardena, maximum silence and privacy for absolute relaxation. Direct access to the slopes, exit and return with the skis on your feet</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <FontAwesomeIcon icon="tv" className="fa-2x text-color1"/>
                                <br/>
                                <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>Services</h5>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Washer and dryer</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Nespresso Coffee Machine</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 2 hovens and slicing machine</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Skiroom with ski depot</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Private locker with boot-dryers</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Private garage with elevator directly to the apartment</li>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="container p-5">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row" style={{marginBottom: "10px"}}>
                            <div className="col-md-12 text-center">
                              <FontAwesomeIcon icon="home" className="fa-2x text-color1"/>
                              <br/>
                              <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>L'appartamento</h5>
                              <p style={{textAlign: "justify"}}>Dolasilla è una stupenda mansarda di charme nella zona più prestigiosa di Selva, ski-in ski-out direttamente sulla pista di collegamento Dantercepies - Selva - Ciampinoi. Riscaldamento autonomo, ski room con armadio personale riscaldato, garage privato, ascensore diretto dal garage. Ogni comfort, Check-in personalizzato, no fumatori, no animali. Dolasilla Charme Apartments è membro dell'Associazione Turistica Selva Gardena e garantisce ai suoi ospiti una vacanza di relax e qualità.</p>
                            </div>
                          </div>
                          <div className="row">
                          <div className="col-md-4 text-center">
                              <FontAwesomeIcon icon="tram" className="fa-2x text-color1"/>
                              <br/>
                              <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>La location</h5>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 68 mq</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 5 ospiti</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 1 matrimoniale con letto king size (180x200), 1 soppalco con 2 letti singoli (90x200)</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 5 posti letto</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 2 bagni</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 2 Smart TV 50" - 45"</li>
                              <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Free WIFI</li>
                            </div>
                            <div className="col-md-4 text-center mt-4">
                              <FontAwesomeIcon icon="map-marker-alt" className="fa-2x text-color1"/>
                              <br/>
                              <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>Posizione</h5>
                              <p>Condominio signorile nella zona più alta di Selva di Val Gardena, massimo silenzio e riservatezza per un relax assoluto. Acesso diretto alle piste, esci e rientra con gli sci ai piedi</p>
                            </div>
                            <div className="col-md-4 text-center mt-3">
                                <FontAwesomeIcon icon="tv" className="fa-2x text-color1"/>
                                <br/>
                                <h5 style={{fontWeight: "bold", marginBottom: "10px"}}>Servizi</h5>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Lavatrice e Asciugatrice</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Macchina Nespresso</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> 2 forni e affettatrice</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Skiroom con deposito sci</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Armadio privato con asciugascarponi</li>
                                <li><FontAwesomeIcon icon="mountain" className="text-color1"/> Garage privato con ascensore direttamente alla mansarda</li>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })()
          } </React.Fragment>
        )
      } 
      </MyContext.Consumer>

    );
  }
}

export default ApartmentDescription;