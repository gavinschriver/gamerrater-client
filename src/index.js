import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { GamerRater } from "./components/GamerRater"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GamerRater />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

