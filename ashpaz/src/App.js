import React from 'react';
import './App.css';
import Nav from "./components/myNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
