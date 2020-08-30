import React from 'react';
import './App.css';
import Nav from "./components/myNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import PostPublish from './pages/PostPublish';
import EditPost from './pages/EditPost';
import PrivateRoute from './components/PrivateRoute';
import Posts from './pages/Posts'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path='/publish' component={PostPublish} />
                <PrivateRoute exact path='/posts' component={Posts} />
                <PrivateRoute path='/posts/:id' component={EditPost} />
            </Switch>
        </Router>
    );
}

export default App;
