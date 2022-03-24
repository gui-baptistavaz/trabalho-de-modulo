import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Destinos from './components/Destinos'
import Promocoes from './components/Promocoes';
import Contatos from './components/Contatos';
import Login from './components/Login';
import ListCadastros from './components/ListCadastros';
import CreateUser from './components/CreateUser';
import DetailsUser from './components/DetailsUser';




function App() {
  return (
    <div>
        <Router>
              <Header />
                <div>
                    <Switch> 

                          <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/destinos" component = {Destinos}></Route>
                          <Route path = "/promocoes" component = {Promocoes}></Route>
                          <Route path = "/contatos" component = {Contatos}></Route>
                          <Route path = "/cadastros" component = {ListCadastros}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/add-user/:id" component = {CreateUser}></Route>
                          <Route path = "/view-user/:id" component = {DetailsUser}></Route>

                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}

export default App;