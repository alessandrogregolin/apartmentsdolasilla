import React, {Component} from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MyContext} from '../context';
import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';
import * as variables from '../variables.json';
const websiteVariables = variables.default;

class GuestBook extends Component {
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
                  <div
                    className={"py-5 text-center section-secondary text-white carousel-bg"} style={{backgroundImage:`url(${websiteVariables.guestBook.backgroundImage})`}}>
                    <div className={"container"}>
                      <div className={"row align-items-center"}>
                        <div className={"mx-auto col-12 p-3 section-light col-lg-5"}>
                          <div
                            className={"carousel slide"}
                            data-ride="carousel"
                            data-pause={"hover"}
                            data-interval={5000}
                            id="carouselArchitecture">
                            <div className={"carousel-inner"} role="listbox">
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review1.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className={"my-4"}>{translationEN.guestBook.review1.p1}
                                  <br></br>{translationEN.guestBook.review1.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item active"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review2.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationEN.guestBook.review2.p1}
                                  <br></br>{translationEN.guestBook.review2.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review3.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationEN.guestBook.review3.p1}
                                  <br></br>{translationEN.guestBook.review3.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review4.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationEN.guestBook.review4.p1}
                                  <br></br>{translationEN.guestBook.review4.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review5.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationEN.guestBook.review5.p1}
                                  <br></br>{translationEN.guestBook.review5.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review6.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationEN.guestBook.review6.p1}
                                  <br></br>{translationEN.guestBook.review6.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (context.state.language === 'it') {
                return (
                    <div
                    className={"py-5 text-center section-secondary text-white carousel-bg"}
                    style={{backgroundImage:`url(${websiteVariables.guestBook.backgroundImage})`}}>
                    <div className={"container"}>
                      <div className={"row"}>
                        <div className={"mx-auto col-12 p-3 section-light col-lg-5"}>
                          <div
                            className={"carousel slide"}
                            data-ride="carousel"
                            data-pause={"hover"}
                            data-interval={5000}
                            id="carouselArchitecture">
                            <div className={"carousel-inner"} role="listbox">
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review1.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className={"my-4"}>{translationIT.guestBook.review1.p1}
                                  <br></br>{translationIT.guestBook.review1.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item active"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review2.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review2.p1}
                                  <br></br>{translationIT.guestBook.review2.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review3.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review3.p1}
                                  <br></br>{translationIT.guestBook.review3.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review4.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review4.p1}
                                  <br></br>{translationIT.guestBook.review4.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review4.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review4.p1}
                                  <br></br>{translationIT.guestBook.review4.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review5.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review5.p1}
                                  <br></br>{translationIT.guestBook.review5.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review6.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review6.p1}
                                  <br></br>{translationIT.guestBook.review6.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                    <div
                    className={"py-5 text-center section-secondary text-white carousel-bg"}
                    style={{backgroundImage:`url(${websiteVariables.guestBook.backgroundImage})`}}>
                    <div className={"container"}>
                      <div className={"row"}>
                        <div className={"mx-auto col-12 p-3 section-light col-lg-5"}>
                          <div
                            className={"carousel slide"}
                            data-ride="carousel"
                            data-pause={"hover"}
                            data-interval={5000}
                            id="carouselArchitecture">
                            <div className={"carousel-inner"} role="listbox">
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review1.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className={"my-4"}>{translationIT.guestBook.review1.p1}
                                  <br></br>{translationIT.guestBook.review1.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item active"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review2.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review2.p1}
                                  <br></br>{translationIT.guestBook.review2.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review3.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review3.p1}
                                  <br></br>{translationIT.guestBook.review3.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review4.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review4.p1}
                                  <br></br>{translationIT.guestBook.review4.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review5.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review5.p1}
                                  <br></br>{translationIT.guestBook.review5.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                              <div className={"carousel-item"}>
                                <img
                                  className={"d-block img-fluid rounded-circle mx-auto"}
                                  alt=" "
                                  src={websiteVariables.guestBook.review6.img}
                                  data-holder-rendered="true"
                                  width="200"></img>
                                <p className="my-4">{translationIT.guestBook.review6.p1}
                                  <br></br>{translationIT.guestBook.review6.p2}</p>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"d-inline"}/>
                                <FontAwesomeIcon icon={['fas', 'star']} className={"mx-1 d-inline"}/>
                              </div>
                            </div>
                          </div>
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
  }
}

export default GuestBook;

/*
<!-- Carousel reviews -->
  <div class="py-5 text-center section-secondary" style="background-image: url(&quot;assets/restaurant/testimonal_background_light.jpg&quot;);" >
    <div class="container">
      <div class="row">
        <div class="mx-auto col-12 p-3 section-light col-lg-5">
          <div class="carousel slide" data-ride="carousel" id="carouselArchitecture">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item">
                <img class="d-block img-fluid rounded-circle mx-auto" src="assets/restaurant/testimonial_1_light.jpg" data-holder-rendered="true" width="200">
                <p class="my-3">So good and super staff. <br>Go for the shrimps!.</p>
                <i class="fa fa-star d-inline"></i>
                <i class="fa fa-star mx-1 d-inline"></i>
                <i class="fa fa-star d-inline"></i>
                <i class="fa fa-star mx-1 d-inline"></i>
                <i class="fa fa-star-o d-inline"></i>
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid rounded-circle mx-auto" src="assets/restaurant/testimonial_2_light.jpg" data-holder-rendered="true" width="200">
                <p class="my-3">Super enthusiastic about this place. <br>They play live music too.</p>
                <i class="fa fa-star d-inline"></i>
                <i class="fa fa-star mx-1 d-inline"></i>
                <i class="fa fa-star d-inline"></i>
                <i class="fa fa-star mx-1 d-inline"></i>
                <i class="fa fa-star d-inline"></i>
              </div>
              <div class="carousel-item active">
                <img class="d-block img-fluid rounded-circle mx-auto" src="assets/restaurant/testimonial_3_light.jpg" data-holder-rendered="true" width="200">
                <p class="my-3">It was since a while that I ate that good. <br>Definitely recommended.</p>
                <i class="fa fa-star d-inline"></i>
                <i class="fa fa-star mx-1 d-inline"></i>
                <i class="fa fa-star d-inline"></i>
                <i class="fa fa-star-half-o mx-1 d-inline"></i>
                <i class="fa fa-star-o d-inline"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
*/