import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import browserHistory from "react-dom";
import Kanto from "./components/Kanto/Kanto";
import Hoenn from "./components/Hoenn/Hoenn"
// import Welcome from "./pages/WelcomePage";
// import Gen from "./pages/GenPage.js";
import Galar from "./pages/GalarPage.js";
import Pokemon from "./pages/PokemonPage";
import Eevee from "./pages/EeveePage";
import './App.css';
import Oddish from "./components/Oddish/Oddish";
import Ralts from "./components/Ralts/Ralts";
import Tyrogue from "./components/Tyrogue/Tyrogue";
import Zacian from "./components/Zacian/Zacian";
import Zamazenta from "./components/Zamazenta/Zamazenta";

function App() {
  return (
    <div>
      <Router history={browserHistory} >
        <Route exact path="/" component={Galar}></Route>
        <Route exact path="/pokedex-v2" component={Galar}></Route>
        <Route exact path="/kanto" component={Kanto}></Route>
        <Route exact path="/hoenn" component={Hoenn}></Route>
        <Route exact path="/pokemon/:pokemon" component={Pokemon}></Route>
        <Route exact path="/oddish/:pokemon" component={Oddish}></Route>
        <Route exact path="/tyrogue/:pokemon" component={Tyrogue}></Route>
        <Route exact path="/ralts/:pokemon" component={Ralts}></Route>
        <Route exact path="/eevee/:pokemon" component={Eevee}></Route>
        <Route exact path="/zacian/:pokemon" component={Zacian}></Route>
        <Route exact path="/zamazenta/:pokemon" component={Zamazenta}></Route>
      </Router>

    </div>
  );
}

export default App;
