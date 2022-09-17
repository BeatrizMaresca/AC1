import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Enviar from './Enviar';
import QuemSomos from './QuemSomos';
import Usuario from './Usuario';

export default function App() {
  return (
      <>
    <header>
    <Link to='/Home'>Home</Link>
    <Link to='/Cadastro'>Cadastro</Link>
    <Link to='/Enviar'>Enviar</Link>
    <Link to='/QuemSomos'>QuemSomos</Link>
    <Link to='/Usuario'>Usuario</Link>  
    </header>
    <hr></hr>
    <main>
        <Switch>
          <Route path='/Home' component= {Home}/>
          <Route path='/Cadastro' component= {Cadastro}/>
          <Route path='/Usuario' component= {Usuario}/>
          <Route path='/Enviar' component= {Enviar}/>
          <Route path='/QuemSomos' component= {QuemSomos}/>
        </Switch>
      </main>
      </>
  );
}

