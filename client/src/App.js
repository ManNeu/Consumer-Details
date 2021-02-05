import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ConsumerState from "./context/consumer/ConsumerState";
import AuthState from "./context/auth/AuthState";
const App = () => {
  return (
    <AuthState>
      <ConsumerState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ConsumerState>
    </AuthState>
  );
};

export default App;
