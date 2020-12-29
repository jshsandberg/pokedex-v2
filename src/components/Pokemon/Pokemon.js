import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar"

import axios from "axios";

function Pokemon() {

    const pokemon = useParams();

    const location = useLocation();

    const [pokemonInfo, setPokemonInfo] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setPokemonInfo(location.state);
        setLoading(false);
    }, [])

    
   if (isLoading) {
       return (
           <div>
               <h1>Loading...</h1>
           </div>
       )
   } else {
    return (  
        <>
            <div className="container card-container">
                <div className="row">
                    <div className="col">
                        <div style={{textAlign: "center"}}>
                            <h1  className="capitalize">{pokemonInfo.name}</h1>
                            <h2>#{pokemonInfo.id}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div style={{backgroundColor: "lightgray"}} className="col">
                        <div className="card">
                            <img className="card-img" src={`https://www.serebii.net/swordshield/pokemon/${pokemonInfo.id}.png`}></img>
                        </div>
                    </div>
                    <div style={{backgroundColor: "lightgray"}} className="col">
                        <h6>{pokemonInfo.description}</h6>
                        <br></br>
                        <h5>{pokemonInfo.type.type1} {pokemonInfo.type.type2}</h5>
                        <div style={{backgroundColor: "lightblue"}} className="container">
                            <div className="row">
                                <div className="col">
                                    <h3>Weight: {pokemonInfo.weight}</h3>
                                    <br></br>
                                    <h3>Height: {pokemonInfo.height}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div style={{backgroundColor: "lightgray"}} className="col">
                        <h4>Hp: <ProgressBar animated max={160} now={pokemonInfo.stats.hp} /> </h4>
                        <h4>Atk: <ProgressBar animated max={160} now={pokemonInfo.stats.atk} /> </h4>
                        <h4>Def: <ProgressBar animated max={160} now={pokemonInfo.stats.def} /> </h4>
                        <h4>SpA: <ProgressBar animated max={160} now={pokemonInfo.stats.spa} /> </h4>
                        <h4>SpD: <ProgressBar animated max={160} now={pokemonInfo.stats.spd} /> </h4>
                        <h4>Spe: <ProgressBar animated max={160} now={pokemonInfo.stats.spe} /> </h4>
                    </div>
                </div>
            </div>     
        </>
    )
   }
}

export default Pokemon