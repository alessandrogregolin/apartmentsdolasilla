import React, { Component } from 'react';
import '../App.css';
import * as variables from '../variables.json';
import { MyContext } from '../context';

import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';

const websiteVariables = variables.default;


class DolasillaStory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            classes: {
                mainDiv: ["py-4", "mb-5"].join(" "),
                container: "container",
                row: ["row","bg-color1", "p-4"].join(" "),
                colMd6: ["col-md-6", "bg-light", "p-4", "text-justify"].join(" "),
                h2: ["mb-3"].join(" "),
                p: ["m-0"].join(" "),
                p2: "my-4",
                colmd6p0: ["col-md-6", "p-0"].join(" "),
                i: ["d-inline-block", "text-muted"].join(" "),
                img: ["img-fluid", "d-block", "custom-image-height"].join(" ")
            }
        };
    }
    render() { 
        return ( 
          <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              {
                (() => {
                  if (context.state.language === 'en') {
                    return (
                      <div className={this.state.classes.mainDiv}>
                      <div className={this.state.classes.container}>
                        <div className={this.state.classes.row}>
                          <div className={this.state.classes.colMd6}>
                          <p className={this.state.classes.p}>{translationEN.dolasillaStory.p}</p>
                          <h1 className={this.state.classes.h2}>Dolasilla</h1>
                          <p className={this.state.classes.p2}>{translationEN.dolasillaStory.p2}</p>
                          </div>
                          <div className={this.state.classes.colmd6p0}>
                            <img alt="background" src={websiteVariables.dolasillaStoryBackground} className={this.state.classes.img} />
                          </div>
                        </div>
                      </div>
                    </div>
                      );
                  } else if (context.state.language === 'it') {
                      return (
                        <div className={this.state.classes.mainDiv}>
                        <div className={this.state.classes.container}>
                          <div className={this.state.classes.row}>
                            <div className={this.state.classes.colMd6}>
                            <p className={this.state.classes.p}>{translationIT.dolasillaStory.p}</p>
                            <h1 className={this.state.classes.h2}>Dolasilla</h1>
                            <p className={this.state.classes.p2}>{translationIT.dolasillaStory.p2}</p>
                            </div>
                            <div className={this.state.classes.colmd6p0}>
                              <img alt="background" src={websiteVariables.dolasillaStoryBackground} className={this.state.classes.img} />
                            </div>
                          </div>
                        </div>
                      </div>
                      );
                  } else {
                      return (
                        <div className={this.state.classes.mainDiv}>
                        <div className={this.state.classes.container}>
                          <div className={this.state.classes.row}>
                            <div className={this.state.classes.colMd6}>
                            <p className={this.state.classes.p}>{translationIT.dolasillaStory.p}</p>
                            <h1 className={this.state.classes.h2}>Dolasilla</h1>
                            <p className={this.state.classes.p2}>{translationIT.dolasillaStory.p2}</p>
                            </div>
                            <div className={this.state.classes.colmd6p0}>
                              <img alt="background" src={websiteVariables.dolasillaStoryBackground} className={this.state.classes.img} />
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
 
export default DolasillaStory;
