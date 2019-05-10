import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
 import Home  from '../components/main/home';
import { Header } from '../components/header/header';
import { Error404 } from '../components/common/error404';
import '../styles/index.css';

export default () => (
   <BrowserRouter>
      <div className="route-container">
        <Route  path="/" render={(props) => <Header {...props}/>} />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props}/>} />
          <Route component={Error404} />
        </Switch>
    </div>
   </BrowserRouter>
 )