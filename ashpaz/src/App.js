import React from 'react';
import './App.css';
import Nav from "./components/myNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPublish from './pages/PostPublish';
import PrivateRoute from './components/PrivateRoute';


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path='/publish' component={PostPublish} />
            </Switch>
        </Router>
    );
}

export default App;
