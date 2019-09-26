import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/styles/sass/feature.css';

class Feature1 extends Component {
  render() {
    return (
      // // <div className="feature">
      //   {/* <div className="feature-img-background">
      //   <ResponsiveImage imageName={this.props.content.imageName} /></div> */}
    
        <div className="blurb">
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.blurb}</p>
        </div>
    );
  }
}

Feature1.propTypes = {
  content: PropTypes.object,
}

Feature1.defaultProps = {
  content: {
    blurb: 'Some content to print',
    imageName: 'flexible',
    title: 'This is a feature',
  }
}


export default Feature1;
