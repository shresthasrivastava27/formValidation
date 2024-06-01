import React from 'react'
import ReactDOM from 'react-dom/client'

import { NavRoutes } from './_navigation.routes';

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';


const HomeApp = () => {
  return useRoutes(NavRoutes);
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <HomeApp />
    </Router >

  </React.StrictMode>,
)
