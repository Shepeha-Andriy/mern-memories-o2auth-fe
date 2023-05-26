import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { gapi } from "gapi-script";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar.js';
import { Home } from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId: process.env.REACT_APP_GOOGLE_ID,
    plugin_name: "chat",
  });
});

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/auth' element={<Auth></Auth>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
