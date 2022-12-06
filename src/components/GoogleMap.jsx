import React, { Component } from 'react';
import '../App.css';


class GoogleMap extends Component {
    state = {  }
    render() { 
        return ( 
        <div className={"col-md-12 bg-light"}>
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.5771989521413!2d11.759577015704295!3d46.556049979129156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477814e4530fdd4d%3A0x49be29838fca44fc!2sStr.+Cir%2C+16%2C+39048+Selva+di+Val+Gardena+BZ!5e0!3m2!1sen!2sit!4v1561675737176!5m2!1sen!2sit" style={{border:"0", width: "100%", height: "450px", frameborder: "0", marginBottom:"50px"}} allowFullScreen></iframe>
        </div> 
        );
    }
}
 
export default GoogleMap;