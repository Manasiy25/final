import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import About from './pages/About';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import view from './pages/view';


function App() {
  return (
   <BrowserRouter>
   <div className ="App">
     <header />
     <ToastContainer/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/add" component={AddEdit} />
       <Route exact path="/update" component={AddEdit}/>
       <Route exact path="/about" component={About} />
       <Route exact path="/view/:id" component={view} />
     </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
