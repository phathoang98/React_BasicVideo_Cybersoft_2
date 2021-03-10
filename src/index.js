import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ---- Import Material UI

import { ThemeProvider } from "@material-ui/core/styles";


ReactDOM.render(

  <ThemeProvider>
    <App />
  </ThemeProvider>

  ,
  document.getElementById('root')
);


reportWebVitals();
