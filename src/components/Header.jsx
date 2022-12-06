import React, { Component } from 'react';
import '../App.css';
import variables from '../variables.json';
import { MyContext } from '../context';

import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';

const websiteVariables = variables.default;


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            classes: {
                mainDiv: ["align-items-center", "d-flex", "py-5", "section-primary", "back-cover", "my-header"].join(" "),
                container: "container",
                row: "row",
                colLg7: ["col-lg-7", "align-self-center", "text-lg-left", "text-center"].join(" "),
                h1: ["mb-0", "mt-4", "display-2", "text-color1", "custom-title-h1"].join(" "),
                p: ["mb-5", "h4", "text-color1", "custom-title-p"].join(" "),
                colLg5: ["col-lg-5", "p-3"].join(" ")
            }
        }
    }

    render() { 
        return(
            <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                {
                  (() => {
                    if (context.state.language === 'en') {
                      return (
                            <div className={this.state.classes.mainDiv} style={{backgroundImage:`url(img/header/salottoHeader.png)`}}>
                                <div className={this.state.classes.container}>
                                    <div className={this.state.classes.row}>
                                        <div className={this.state.classes.colLg7}>
                                            <h1 className= {this.state.classes.h1}>{translationEN.header.h1}</h1>
                                            <p className={this.state.classes.p}>{translationEN.header.p}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                    } else if (context.state.language === 'it') {
                        return (
                            <div className={this.state.classes.mainDiv} style={{backgroundImage:`url(img/header/salottoHeader.png)`}}>
                                <div className={this.state.classes.container}>
                                    <div className={this.state.classes.row}>
                                        <div className={this.state.classes.colLg7}>
                                            <h1 className= {this.state.classes.h1}>{translationIT.header.h1}</h1>
                                            <p className={this.state.classes.p}>{translationIT.header.p}</p>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                            );
                    } else {
                        return (
                            <div className={this.state.classes.mainDiv} style={{backgroundImage:`url(img/header/salottoHeader.png)`}}>
                                <div className={this.state.classes.container}>
                                    <div className={this.state.classes.row}>
                                        <div className={this.state.classes.colLg7}>
                                            <h1 className= {this.state.classes.h1}>{translationIT.header.h1}</h1>
                                            <p className={this.state.classes.p}>{translationIT.header.p}</p>
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

 
export default Header;

