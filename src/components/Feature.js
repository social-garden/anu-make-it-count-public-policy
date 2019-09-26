import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './ResponsiveImage';
import '../css/styles/sass/feature.css';

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <ResponsiveImage imageName={this.props.content.imageName} />
    
        {/* <div className="blurb">
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.blurb}</p></div> */}
      </div>
    );
  }
}

Feature.propTypes = {
  content: PropTypes.object,
}

Feature.defaultProps = {
  content: {
    blurb: 'Some content to print',
    imageName: 'flexible',
    title: 'This is a feature',
  }
}


export default Feature;
