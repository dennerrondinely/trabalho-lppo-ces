import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Pecas from './Pecas/Pecas'
import PecasCreate from './Pecas/PecasCreate'
import NotFound from './NotFound/NotFound'
import MenuApp from '../Menu/Menu'
import Clientes from './Clientes/Clientes'
import ClientesCreate from './Clientes/ClientesCreate'
import Agendamentos from './Agendamentos/Agendamentos'
import AgendamentosCreate from './Agendamentos/AgendamentosCreate'
import '../Menu/Menu.css'
export default class Rota extends Component {
    render() {    
        return (
          <BrowserRouter>
            <MenuApp>
                <div className="Inicio">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/pecas" render={({history}) => <Pecas history={history}/> }/>
                        <Route exact path="/pecas/:id" component={PecasCreate}/>
                        <Route exact path="/clientes" render={({history}) => <Clientes history={history}/> }/>
                        <Route exact path="/clientes/:id" render={({history}) => <ClientesCreate history={history}/> }/>
                        <Route exact path="/agendamentos" render={({history}) => <Agendamentos history={history}/> }/>
                        <Route exact path="/agendamentos/:id" component={AgendamentosCreate }/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </MenuApp>
          </BrowserRouter>
      );
    }
}