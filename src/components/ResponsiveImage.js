import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PATH = 'images/';

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      small: PATH + props.imageName + '.' + props.fileType,
      medium: PATH + props.imageName + '@2x.' + props.fileType,
    }
  }

  render() {
    return (
      <img
        src={this.state.small}
        srcSet={`${this.state.small} 700w, ${this.state.medium} 1000w`}
        alt={this.props.alt}
        className={this.props.class}
      />
    );
  }
}

Feature.propTypes = {
  alt: PropTypes.string,
  class: PropTypes.string,
  imageName: PropTypes.string,
  fileType: PropTypes.string,
}

Feature.defaultProps = {
  alt: '',
  class: 'image',
  imageName: 'flexible',
  fileType: 'png',
}

export default Feature;