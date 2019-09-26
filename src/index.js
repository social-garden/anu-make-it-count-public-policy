import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// const routing = (
//     <Router>
//         <div>
//             <Route exact path="/" component = {App}/>
//             <Route path="/thank-you" component = {Thank}/>
//         </div>
//     </Router>
// )
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker();
serviceWorker.unregister();
