import React, { Component } from 'react';
import {FORM} from '../data/Content';
import '../css/styles/sass/form.css';

class Form extends Component {
    render(){
        return (
            <section id="form">
            <div className="leftrec"></div>
            <div className="rightrec"></div>
            <div className="wrapper">
            {/* <div className="formInner">
            <div className="formContainer">
            <p>Round 1 applications to our masters programs</p>
            <p>close on 23 September 2019.</p>
            <div dangerouslySetInnerHTML={{__html: FORM}} />
            <button type="button" className="download-button">Download course guide</button>
            </div>
            </div> */}
            <div className="form-text">
            <p>"The diversity of the cohort is what I’ve loved most. People come from a variety of backgrounds and having that exchange of ideas in class has been very beneficial."</p>
            <p className="substitle">Amanda Lee, Master of Public Policy</p>
            </div>
            </div>
            
            </section>
        )
    }
}

export default Form;