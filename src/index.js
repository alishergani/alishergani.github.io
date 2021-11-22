import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.scss';
import App from './comps/App';


const renderApp = () => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root')
  );
}

// if(window.innerWidth < 700) {
//   alert('USE MOBILE')
//   ReactDOM.render(
//     <h1>USE MOBILE</h1>,
//     document.getElementById('root')
//   );
// } else {
// }
renderApp()