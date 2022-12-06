import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialIcons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            link: this.props.iconLink,
            classes: ["fa-3x", "mr-3", "d-inline", "text-color1"].join(" ")
         }
    }
    returnIconClass = () => {
        switch (this.props.iconChoice) {
            case "facebook":
                return <FontAwesomeIcon icon={['fab', 'facebook']} />
            case "instagram":
                return <FontAwesomeIcon icon={['fab', 'instagram']} />     
            case "whatsapp":
                return <FontAwesomeIcon icon={['fab', 'whatsapp']} />
            case "mail":
                return <FontAwesomeIcon icon="envelope"/>
            default:
            return "test"
        };
    };
    
    render() { 
        return <a href={this.state.link}><i className={this.state.classes}>{this.returnIconClass()}</i></a>
    }
}
 
export default SocialIcons;