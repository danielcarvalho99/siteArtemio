import React from 'react';
import ReactDOM from 'react-dom';
import Artemio from './Artemio';
import Footer from './Footer';
import Checkbox from './CheckBox';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <body style={{backgroundColor:"cornflowerblue"}}>
      <Artemio />
      <Footer/>
      <Checkbox/>
    </body>
  </div>,
  document.getElementById('root')
);

