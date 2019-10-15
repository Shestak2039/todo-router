import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ComponentWrapper from './components/ContentWrapper';
import TodoList from './components/TodoList';
import AddingTodo from './components/AddingTodo';
import ButtonLink from './components/ButtonLink';

import './App.css';

const App = () => (
  <Router>
    <ComponentWrapper>
      <Route exact={true} path='/' component={() => (<TodoList ableEdit={false}/>)}/>
      <Route exact={true} path='/' component={() => (<ButtonLink path={"/edit"}>Edit</ButtonLink>)}/>
      
      <Route path='/edit' component={() => (<ButtonLink path={"/"}>Home</ButtonLink>)}/>
      <Route exact={true} path='/edit' component={AddingTodo}/>
      <Route path='/edit' component={() => (<TodoList ableEdit={true}/>)}/>
    </ComponentWrapper>
  </Router>
)

export default App;
