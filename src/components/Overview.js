import React, { Component } from 'react';
import Feature from './Feature';
import { OVERVIEW } from '../data/Content';
import '../css/styles/sass/overview.css';
import Feature1 from './Feature1';

class Overview extends Component {

    renderFeatures() {
        const features = [];
        for (let i in OVERVIEW.sections) {
          features.push(<Feature key={i} content={OVERVIEW.sections[i]} />);
        }
        return features;
      }
      
      renderFeatures1() {
        const features1 = [];
        for (let i in OVERVIEW.sections) {
          features1.push(<Feature1 key={i} content={OVERVIEW.sections[i]} />);
        }
        return features1;
      }
    
      render() {
        return (
          <section className="overview">
            <div className="leftrec"></div>
            <div className="rightrec"></div>
            <div className="wrapper">
            <div className="overviewContainer">
            <div className="overviewInner">
              <p className="overview-title">{OVERVIEW.title}</p>
              {this.renderFeatures()}
              <div className="overviewContent">
              {this.renderFeatures1()}
              </div>
            </div>
            </div>
            </div>
          </section>
        );
      }
    }
    
    export default Overview;