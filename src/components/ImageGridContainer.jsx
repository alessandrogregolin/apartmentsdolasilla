import React, {Component} from 'react';
import ImageGrid from './ImageGrid'

import {MyContext} from '../context';

import translationEN from '../translations/english.json';
import translationIT from '../translations/italian.json';

class ImageGridContainer extends Component {
  state = {}
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            {(() => {
              if (context.state.language === 'en') {
                return (
                  <div className={"py-5 bg-light"}>
                    <div className={"container"}>
                      <div className={"col-md-12 text-center"}>
                        <h1 className={"mb-4 text-center text-color1"}>{translationEN.ImageGridContainer.h1}</h1>
                      </div>
                      <div className={"row p-4 bg-light"}>
                        <div
                          className={"col-md-12"}
                          style={{
                          padding: "0"
                        }}>
                          <ImageGrid></ImageGrid>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (context.state.language === 'it') {
                return (
                  <div className={"py-5 bg-light"}>
                    <div className={"container"}>
                      <div className={"col-md-12 text-center"}>
                        <h1 className={"mb-4 text-center text-color1"}>{translationIT.ImageGridContainer.h1}</h1>
                      </div>
                      <div className={"row p-4 bg-light"}>
                        <div
                          className={"col-md-12"}
                          style={{
                          padding: "0"
                        }}>
                          <ImageGrid></ImageGrid>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={"py-5 bg-light"}>
                    <div className={"container"}>
                      <div className={"col-md-12 text-center"}>
                        <h1 className={"mb-4 text-center text-color1"}>{translationIT.ImageGridContainer.h1}</h1>
                      </div>
                      <div className={"row p-4 bg-light"}>
                        <div
                          className={"col-md-12"}
                          style={{
                          padding: "0"
                        }}>
                          <ImageGrid></ImageGrid>
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

export default ImageGridContainer;
