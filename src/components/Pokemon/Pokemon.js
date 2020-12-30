import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../Pokemon/style.css";
import Ice from "../../utils/Types/Ice.png";
import Fire from "../../utils/Types/Fire.png";
import Grass from "../../utils/Types/Grass.png";
import Water from "../../utils/Types/Water.png";
import Normal from "../../utils/Types/Normal.png";
import Flying from "../../utils/Types/Flying.png";
import Fighting from "../../utils/Types/Fighting.png";
import Fairy from "../../utils/Types/Fairy.png";
import Dragon from "../../utils/Types/Dragon.png";
import Ghost from "../../utils/Types/Ghost.png";
import Steel from "../../utils/Types/Steel.png";
import Ground from "../../utils/Types/Ground.png";
import Rock from "../../utils/Types/Rock.png";
import Poison from "../../utils/Types/Poison.png";
import Dark from "../../utils/Types/Dark.png";
import Electric from "../../utils/Types/Electric.png";
import Psychic from "../../utils/Types/Psychic.png";
import Bug from "../../utils/Types/Bug.png";
import Arrow from "../../utils/Extra/Arrow.svg";



import axios from "axios";

function Pokemon() {

    const pokemon = useParams();

    const location = useLocation();

    const [evolution, setEvolution] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect( async () => {
        const fetchData = async () => {

            const beforeEvolution = location.state.evolutions.filter(x => !!x)

            const newEvolution = [...new Set(beforeEvolution)];


        
            //console.log(newEvolution)

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

        }
        await fetchData();
        await setPokemonInfo(location.state);
        await setLoading(false);
    }, []);

    const imgStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        width: "55%",
        paddingRight: "0px",
        paddingLeft: "0px",
        paddingTop: "35px"
    }
    
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
                        <div className="row">
                            <h1 style={{paddingLeft: "25px"}}>Type</h1>
                                <div className="col">
                                    {location.state.type.type1 === "grass" ? <img style={imgStyle} src={Grass}></img> : location.state.type.type1 === "poison" ? <img style={imgStyle} src={Poison}></img> : location.state.type.type1 === "ice" ? <img style={imgStyle} src={Ice}></img> : location.state.type.type1 === "dragon" ? <img style={imgStyle} src={Dragon}></img> : location.state.type.type1 === "flying" ? <img style={imgStyle} src={Flying}></img> : location.state.type.type1 === "fighting" ? <img style={imgStyle} src={Fighting}></img> : location.state.type.type1 === "fairy" ? <img style={imgStyle} src={Fairy}></img> : location.state.type.type1 === "electric" ? <img style={imgStyle} src={Electric}></img> : location.state.type.type1 === "fire" ? <img style={imgStyle} src={Fire}></img> : location.state.type.type1 === "ghost" ? <img style={imgStyle} src={Ghost}></img> : location.state.type.type1 === "psychic" ? <img style={imgStyle} src={Psychic}></img> : location.state.type.type1 === "rock" ? <img style={imgStyle} src={Rock}></img> : location.state.type.type1 === "water" ? <img style={imgStyle} src={Water}></img> : location.state.type.type1 === "normal" ? <img style={imgStyle} src={Normal}></img> : location.state.type.type1 === "steel" ? <img style={imgStyle} src={Steel}></img> : location.state.type.type1 === "bug" ? <img style={imgStyle} src={Bug}></img> : location.state.type.type1 === "ground" ? <img style={imgStyle} src={Ground}></img> : location.state.type.type1 === "dark" ? <img style={imgStyle} src={Dark}></img> : null}
                                </div>
                                <div className="col">
                                    {location.state.type.type2 === "grass" ? <img style={imgStyle} src={Grass}></img> : location.state.type.type2 === "poison" ? <img style={imgStyle} src={Poison}></img> : location.state.type.type2 === "ice" ? <img style={imgStyle} src={Ice}></img> : location.state.type.type2 === "dragon" ? <img style={imgStyle} src={Dragon}></img> : location.state.type.type2 === "flying" ? <img style={imgStyle} src={Flying}></img> : location.state.type.type2 === "fighting" ? <img style={imgStyle} src={Fighting}></img> : location.state.type.type2 === "fairy" ? <img style={imgStyle} src={Fairy}></img> : location.state.type.type2 === "electric" ? <img style={imgStyle} src={Electric}></img> : location.state.type.type2 === "fire" ? <img style={imgStyle} src={Fire}></img> : location.state.type.type2 === "ghost" ? <img style={imgStyle} src={Ghost}></img> : location.state.type.type2 === "psychic" ? <img style={imgStyle} src={Psychic}></img> : location.state.type.type2 === "rock" ? <img style={imgStyle} src={Rock}></img> : location.state.type.type2 === "water" ? <img style={imgStyle} src={Water}></img> : location.state.type.type2 === "normal" ? <img style={imgStyle} src={Normal}></img> : location.state.type.type2 === "steel" ? <img style={imgStyle} src={Steel}></img> : location.state.type.type2 === "bug" ? <img style={imgStyle} src={Bug}></img> : location.state.type.type2 === "ground" ? <img style={imgStyle} src={Ground}></img> : location.state.type.type2 === "dark" ? <img style={imgStyle} src={Dark}></img> : null}
                                </div>
                        </div>
                        <div className="row">
                            <h1 style={{paddingLeft: "25px"}}>Weaknesses</h1>
                                <div className="col">

                                </div>
                        </div>
                    </div>
                </div>
                <br></br>
                {evolution.length === 1 ?
                <div className="row">
                    <div className="col">
                        <img className="single-evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[0]}.png`} alt={evolution[0]}></img>
                    </div>
                    <div className="col">
                        <h4 className="single-evolve-text">{location.state.name}</h4><h4>does not evolve</h4>
                    </div>
                </div>
                :
                evolution.length === 2 ?
                <div className="row">
                    <div className="col">
                        <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[0]}.png`} alt={evolution[0]}></img>
                        <img className="double-arrow-img" src={Arrow}></img>
                    </div>
                    <div className="col">
                        <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[1]}.png`} alt={evolution[1]}></img>
                    </div>
                </div>
                :
                evolution.length === 3 ?
                <div className="row">
                    <div className="col">
                        <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[0]}.png`} alt={evolution[0]}></img>
                        <img className="arrow-img" src={Arrow}></img>
                    </div>
                    <div className="col">    
                        <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[1]}.png`} alt={evolution[1]}></img> 
                        <img className="arrow-img" src={Arrow}></img>
                    </div>
                    <div className="col">    
                         <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[2]}.png`} alt={evolution[2]}></img> 
                    </div>
                    <div className="col">    
                         <img className="evolve-img" src={`https://www.serebii.net/swordshield/pokemon/${evolution[3]}.png`} alt={evolution[3]}></img> 
                    </div>
                
                </div>
                :
                <div></div>}

            </div>     
        </>
    )
   }
}

export default Pokemon