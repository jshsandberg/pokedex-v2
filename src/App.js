import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import browserHistory from "react-dom";
import Welcome from "./pages/WelcomePage";
import Gen from "./pages/GenPage.js";
import './App.css';

function App() {
  return (
    <div>
      <Router history={browserHistory} >
        <Route path="/" component={Welcome}></Route>
        <Route path="/gen" component={Gen}></Route>
      </Router>

    </div>
  );
}

export default App;
