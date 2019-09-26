import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bandelement extends Component {
    renderListItems(){
        const list = [];
        for(let i in this.props.content.ListItems){
            list.push(<p>{this.props.content.ListItems[i]}</p>)
        }
        return list;
    }
    
    render(){
        return (
            <div className={`band ${this.props.content.class}`}>
            <div className={`${this.props.content.class}-1`}>
            <h3>{this.props.content.title}</h3>
            <div className="bandcontent">{this.renderListItems()}
            <div className="findmorelink">
            <a href={this.props.content.link} target="_blank" rel="noopener noreferrer">Find out more</a></div>
            </div>
            </div>
            </div>
        );
    }


}

Bandelement.propTypes = {
    content: PropTypes.object,
  }
  
Bandelement.defaultProps = {
    content: {
      class:'class name',  
      title: 'Some content to print',
      ListItems: 'paragraph',
      link: 'This is a link',
    }
  }

export default Bandelement;