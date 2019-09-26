import React, { Component } from 'react';
import Bandelement from './Bandelement';
import '../css/styles/sass/band.css';
import { BAND } from '../data/Content';
import ResponsiveImage from './ResponsiveImage';

class Band extends Component {
    renderBands() {
        const bands = [];
        for (let i in BAND.sections) {
          bands.push(<Bandelement key={i} content={BAND.sections[i]} />);
        }
        return bands;
    }

    
      render() {
        return (
          <section className="bands">
            <div className="leftrec">
            <div className="bandMiddle">
            <ResponsiveImage imageName="across-arrow" class="bandarrow"/>
                <div className="explore"><p><strong>Explore our world-class economics programs.</strong></p><p>To learn more about program structures, admission requirements, and elective courses, simply click through or register now to receive our complete course guide.</p></div>
            </div></div>
            <div className="rightrec"></div>

            

            <div className="wrapper">
            <div className="bandContainer">
           
              <p className="band-title">{BAND.title}</p>
              <div className="bandMain">
              <div className="bandInner">{this.renderBands()}</div>  
              </div>
            </div>
            </div>
          </section>
        );
      }
    }
    
    export default Band;