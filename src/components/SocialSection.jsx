import React, {Component} from 'react';
import '../App.css';
import SocialIcons from './SocialIcons';
import * as variables from '../variables.json';

import {MyContext} from '../context';

import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';

const websiteVariables = variables.default;

class SocialSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: {
        py5: ["py-5", "border-custom-social"].join(" "),
        container: "container",
        row: "row",
        colMd12: [
          "p-3",
          "col-md-12",
          "d-flex",
          "flex-column",
          "justify-content-center",
          "align-items-center",
          "text-center",
          "col-md-12-social"
        ].join(" "),
        p: ["mb-3"].join(" "),
        colMd12Social: ["col-md-12", "text-center"].join(" ")
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
                  <div className={this.state.classes.py5}>
                    <div className={this.state.classes.container}>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMd12}>
                          <h1 className="text-color1">{translationEN.socialSection.h1}</h1>
                          <p className={this.state.classes.p}>{translationEN.socialSection.p}</p>
                          <div className={this.state.classes.colMd12Social}>
                            <SocialIcons iconChoice="facebook" iconLink={websiteVariables.facebook}></SocialIcons>
                            <SocialIcons iconChoice="instagram" iconLink={websiteVariables.instagram}></SocialIcons>
                            <SocialIcons iconChoice="whatsapp" iconLink={websiteVariables.whatsapp}></SocialIcons>
                            <SocialIcons iconChoice="mail" iconLink={websiteVariables.email}></SocialIcons>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (context.state.language === 'it') {
                return (
                  <div className={this.state.classes.py5}>
                    <div className={this.state.classes.container}>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMd12}>
                          <h1 className="text-color1">{translationIT.socialSection.h1}</h1>
                          <p className={this.state.classes.p}>{translationIT.socialSection.p}</p>
                          <div className={this.state.classes.colMd12Social}>
                            <SocialIcons iconChoice="facebook" iconLink={websiteVariables.facebook}></SocialIcons>
                            <SocialIcons iconChoice="instagram" iconLink={websiteVariables.instagram}></SocialIcons>
                            <SocialIcons iconChoice="whatsapp" iconLink={websiteVariables.whatsapp}></SocialIcons>
                            <SocialIcons iconChoice="mail" iconLink={websiteVariables.email}></SocialIcons>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={this.state.classes.py5}>
                    <div className={this.state.classes.container}>
                      <div className={this.state.classes.row}>
                        <div className={this.state.classes.colMd12}>
                          <h1 className="text-color1">{translationIT.socialSection.h1}</h1>
                          <p className={this.state.classes.p}>{translationIT.socialSection.p}</p>
                          <div className={this.state.classes.colMd12Social}>
                            <SocialIcons iconChoice="facebook" iconLink={websiteVariables.facebook}></SocialIcons>
                            <SocialIcons iconChoice="instagram" iconLink={websiteVariables.instagram}></SocialIcons>
                            <SocialIcons iconChoice="whatsapp" iconLink={websiteVariables.whatsapp}></SocialIcons>
                            <SocialIcons iconChoice="mail" iconLink={websiteVariables.email}></SocialIcons>
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

export default SocialSection;
