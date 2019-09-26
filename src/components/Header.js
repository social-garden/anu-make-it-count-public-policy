import React, { Component } from 'react';
import ResponsiveImage from './ResponsiveImage';
import '../css/styles/sass/header.css';
import {FORM} from '../data/Content';

class Header extends Component {
    render(){
        return (
            <header className="anu-header">
            <div className="middle-area">
            <div className="middle">
            <div className="count"><div className="middle-wrapper"><p><strong>Make</strong></p><p><strong>It Count</strong></p></div></div>
              <div className="through"><div className="middle-wrapper"><p><strong>Through</strong></p><p><strong>Public Policy</strong></p></div></div>
              </div>
              </div>
            <div className="wrapper">
              <div className="top">
                <div className="tagline">
                <div className="tagline-logo tag-p">
                  Crawford School <br />of Public Policy</div>
                  <div className="tagline-logo"><ResponsiveImage imageName="anu-logo" class="anu-logo" /></div>
                </div>
                
              </div>
              
              <div className="bottom">
                {/* <ResponsiveImage imageName="arrow" class="header-Down-Arrow"/> */}
                <div className="scott"><p><strong>Amanda Lee</strong> is currently completing a Master of Public Policy</p></div>
                <div className="economic"><p><strong>Are you ready to influence Australia's response to critical policy issues such as population growth, public health, and human rights?</strong></p></div>
                <div className="hero"><ResponsiveImage imageName="hero" class="hero-img"/></div>
                
              </div>

              <div className="formInner">
              <div className="formContainer">
              <p id="anchorBack">Applications for 2020 now open</p>
              <div className="notice"><p>Please register your details below if you would like to receive a follow up email from our team, including a detailed course guide.</p></div>
              <div dangerouslySetInnerHTML={{__html: FORM}} />
              {/* <button type="button" className="download-button" id="anchorBack">Register Now</button> */}
             </div>
              </div>
              {/* <div className="form-text">
              <p>"I appreciate the wide range of people I get to engage with on a daily basis. The Crawford student body is very diverse which lets me discuss topics with people with a different perspective than my own"</p>
              <p className="substitle">Scott Thomson, Master of Environmental and Resource Economics</p>
              </div> */}
                
              </div>
          </header> 
        )
    }
}

export default Header;