import React, { Component } from 'react'

// Create new context
export const MyContext = React.createContext()

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    language: ''
  }

  changeLanguage = (e) => {
    this.setState({
      language: e.target.dataset.language
    })
    console.log("changed language", this.state.language);
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeLanguage: this.changeLanguage,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}