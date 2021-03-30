import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Alert from "./components/Alert/Alert";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { AlertState } from "./context/alert/alertState";
import { GithubState } from "./context/github/githubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: 'test'}}/>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
              <Route path='/profile/:name' component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
