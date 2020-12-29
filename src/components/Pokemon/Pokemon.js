import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../Pokemon/style.css";

import axios from "axios";

function Pokemon() {

    const pokemon = useParams();

    const location = useLocation();

    const [evolution, setEvolution] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();
    const [isLoading, setLoading] = useState(true);
    const [multipleEvolutions, setMultipleEvolutions] = useState(false);

    useEffect( async () => {
        const fetchData = async () => {

            

            const newEvolution = location.state.evolutions.filter(x => !!x)

            console.log(newEvolution)

            if (typeof newEvolution[2] === 'string') {

                const evolutions = [];

                for (let i = 0; i < newEvolution.length; i++) {
                    
                    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newEvolution[i]}/`)
    
                    const id = data.id.toString().length === 3 ? data.id : data.id.toString().length === 2 ? "0" + data.id : "00" + data.id;
                    evolutions.push(id);
                }

                setEvolution(evolutions);

            } else if (newEvolution.length === 2) {

                const evolutions = [];

                for (let i = 0; i < newEvolution.length; i++) {
                    
                    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newEvolution[i]}/`)
    
                    const id = data.id.toString().length === 3 ? data.id : data.id.toString().length === 2 ? "0" + data.id : "00" + data.id;
                    evolutions.push(id);
                }

                setEvolution(evolutions);

            } else if (newEvolution.length === 1) {
                
                const evolutions = [];

                for (let i = 0; i < newEvolution.length; i++) {
                    
                    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newEvolution[i]}/`)
    
                    const id = data.id.toString().length === 3 ? data.id : data.id.toString().length === 2 ? "0" + data.id : "00" + data.id;
                    evolutions.push(id);
                }

                setEvolution(evolutions);

            }


            // if (newEvolution[2][1].species.name != undefined) {
            //     newEvolution.push(newEvolution[2][1].species.name);
            //     const final = newEvolution.splice(2, 1);
            //     setMultipleEvolutions(true);
            // }
            

       

           
            

        }
        await fetchData();
        await setPokemonInfo(location.state);
        await setLoading(false);
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
                    <div className="col">   
                        <h1>hello</h1>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[0]}.png`} alt={evolution[0]}></img>
                    </div>
                    {evolution[1] != null ?
                    <div className="col">    
                         <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[1]}.png`} alt={evolution[1]}></img> 
                    </div>
                    :
                    <div></div>}
                    {evolution[2] != null ?
                    <div className="col">    
                         <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[2]}.png`} alt={evolution[2]}></img> 
                    </div>
                    :
                    <div></div>}
                </div>
            </div>     
        </>
    )
   }
}

export default Pokemon