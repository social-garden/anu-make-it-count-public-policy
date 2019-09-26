import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Overview from './components/Overview';
import Band from './components/Band';
import Download from './components/Download';
import Footer from './components/Footer';

import './css/styles/sass/body.css';

class App extends Component{
  render(){
    return (
      <div className="Container">

        <Header />
        <Form />
        <Overview />
        <Band />
        <Download />
        <Footer />
      </div>
    );
  }
}






export default App;
