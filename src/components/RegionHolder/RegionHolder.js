import React from "react";
import { Link } from "react-router-dom";
import Kanto from "../../utils/PokemonMaps/Kanto.jpg";
import Johto from "../../utils/PokemonMaps/Johto.png";
import Hoenn from "../../utils/PokemonMaps/Hoenn.png";
import Sinnoh from "../../utils/PokemonMaps/Sinnoh.jpg";
import Unova from "../../utils/PokemonMaps/Unova.png";
import Kalos from "../../utils/PokemonMaps/Kalos.png";
import Alola from "../../utils/PokemonMaps/Alola.png";
import Galar from "../../utils/PokemonMaps/Galar.jpg";

function RegionHolder() {

  
  
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "300px"}} src={Kanto} alt={Kanto}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "400px"}} src={Johto} alt={Johto}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row"> 
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "300px"}} src={Hoenn} alt={Hoenn}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "300px"}} src={Sinnoh} alt={Sinnoh}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row"> 
          <div className="col">
            <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "350px"}} src={Unova} alt={Unova}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "300px"}} src={Kalos} alt={Kalos}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row"> 
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <img style={{maxWidth: "350px"}} src={Alola} alt={Alola}></img>
                </div>
                <div className="col-6"> 
                  <h3>hello</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <Link to="/galar">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img style={{maxWidth: "300px"}} src={Galar} alt={Galar}></img>
                  </div>
                  <div className="col-6"> 
                    <h3>hello</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    
    );
}

export default RegionHolder