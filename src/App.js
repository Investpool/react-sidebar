import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Reports from "./Pages/Reports";
import Products from "./Pages/Products";
import Team from "./Pages/Team";
import Messages from "./Pages/Messages";
import Support from "./Pages/Support";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/reports" component={Reports} />
        <Route path = "/products" component= {Products} />
        <Route path = "/team" component={Team} />
        <Route path = "/messages" component={Messages} />
        <Route path = "/support" component= {Support} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
