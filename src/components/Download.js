import React, { Component } from 'react';
import '../css/styles/sass/download.css';
import {FORM, ANCHOR} from '../data/Content';

class Download extends Component {
//  anchorBack() {
//     ANCHOR.current.focus();
//  }
    render() {
        return (
          <section className="download">
                <div className="leftrec"></div>
                <div className="rightrec"></div>
                <div className="wrapper">
                <div className="downloadContainer">
                <button type="button" className="download-button"><a href="#anchorBack">Register to receive a course guide</a></button>
                <div className="notfound"><p>Haven't found what you're looking for?</p></div>
                </div>
                </div>
          </section>
          
          
          )
    };
}

export default Download;