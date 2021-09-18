import React, { useEffect, useState } from "react";
import { KantoAPI } from "./KantoAPI";
import Background from "../../utils/Background/Galar.jpg";
import { useHistory } from "react-router-dom";
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
import Alert from "../Alert/Alert";


const Kanto = () => {

    const [pokemon, setPokemon] = useState();
    const [isLoading, setLoading] = useState(true);
    let history = useHistory();


    useEffect(() => {

        const fetchData = async () => {

            const pokemonKanto = await KantoAPI();

            await setPokemon(pokemonKanto);
            await setLoading(false);
        }

        fetchData();
        

    }, []);

    const background = {
        backgroundImage: `url(${Background})`
    }
 
    const imgStyle = {
        width: "40px"
    }


        if (isLoading) {
            return (
                     <div>   
                         <Alert />
                         <h1>LOADING...this may take a few minutes (Check the console to see all the data being collected!)</h1>
                     </div>
                 ) 
        } else {
     
         return (
             <>      
                 <div style={ background }>
                     <Alert />
                     <div className="container">
                         <div className="row">
                             <div className="col">
                                 <br></br>
                                 <h1 style={{display: "flex", justifyContent: "center"}}>Galar Pokedex</h1>
                             </div>
                         </div>
                     </div>
                     <br></br>
                     <div className="container">
                         <div className="row">
                             {
                                 pokemon && pokemon.map((galar, i) => {
                                     return (
                                         <>
                                             <div style={{backgroundColor: "white"}} className="col-3">
                                                 <div onClick={() => { galar.evolutions[0] === "eevee" ?
                                                         history.push({
                                                             pathname: `/eevee/${galar.name}`, 
                                                             state: galar,
                                                             })
                                                         : galar.evolutions[0] === "oddish" ?
                                                         history.push({
                                                             pathname: `/oddish/${galar.name}`,
                                                             state: galar,
                                                         })
                                                         : galar.evolutions[0] === "tyrogue" ?
                                                         history.push({
                                                             pathname: `/tyrogue/${galar.name}`,
                                                             state: galar,
                                                         })
                                                         : galar.evolutions[0] === "ralts" ?
                                                         history.push({
                                                             pathname: `/ralts/${galar.name}`,
                                                             state: galar,
                                                         })
                                                         : galar.evolutions[0] === "zacian" ?
                                                         history.push({
                                                             pathname: `/zacian/${galar.name}`,
                                                             state: galar,
                                                         })
                                                         : galar.evolutions[0] === "zamazenta" ?
                                                         history.push({
                                                             pathname: `/zamazenta/${galar.name}`,
                                                             state: galar,
                                                         })
                                                         : history.push({
                                                             pathname: `/pokemon/${galar.name}`, 
                                                             state: galar,
                                                             })
                                                     }} 
                                                     className="card-galar">
                                                     <img className="card-img-galar" src={`https://www.serebii.net/swordshield/pokemon/${galar.id}.png`} alt={galar.id}></img>
                                                 </div>
                                                 <div className="card-text-galar">
                                                     <div className="row">
                                                         <div className="col-8">
                                                             <h4 style={{textAlign: "center"}} className="capitalize">{galar.name}</h4>
                                                         </div>
                                                         <div className="col">
                                                             <h6># {galar.id}</h6>
                                                         </div>
                                                     </div>
                                                     <div className="row">
                                                         <div style={{textAlign: "center"}} className="col">
                                                             {galar.type.type1 === "grass" ? <img style={imgStyle} src={Grass}></img> : galar.type.type1 === "poison" ? <img style={imgStyle} src={Poison}></img> : galar.type.type1 === "ice" ? <img style={imgStyle} src={Ice}></img> : galar.type.type1 === "dragon" ? <img style={imgStyle} src={Dragon}></img> : galar.type.type1 === "flying" ? <img style={imgStyle} src={Flying}></img> : galar.type.type1 === "fighting" ? <img style={imgStyle} src={Fighting}></img> : galar.type.type1 === "fairy" ? <img style={imgStyle} src={Fairy}></img> : galar.type.type1 === "electric" ? <img style={imgStyle} src={Electric}></img> : galar.type.type1 === "fire" ? <img style={imgStyle} src={Fire}></img> : galar.type.type1 === "ghost" ? <img style={imgStyle} src={Ghost}></img> : galar.type.type1 === "psychic" ? <img style={imgStyle} src={Psychic}></img> : galar.type.type1 === "rock" ? <img style={imgStyle} src={Rock}></img> : galar.type.type1 === "water" ? <img style={imgStyle} src={Water}></img> : galar.type.type1 === "normal" ? <img style={imgStyle} src={Normal}></img> : galar.type.type1 === "steel" ? <img style={imgStyle} src={Steel}></img> : galar.type.type1 === "bug" ? <img style={imgStyle} src={Bug}></img> : galar.type.type1 === "ground" ? <img style={imgStyle} src={Ground}></img> : galar.type.type1 === "dark" ? <img style={imgStyle} src={Dark}></img> : null} 
                                                             {galar.type.type2 === "grass" ? <img style={imgStyle} src={Grass}></img> : galar.type.type2 === "poison" ? <img style={imgStyle} src={Poison}></img> : galar.type.type2 === "ice" ? <img style={imgStyle} src={Ice}></img> : galar.type.type2 === "dragon" ? <img style={imgStyle} src={Dragon}></img> : galar.type.type2 === "flying" ? <img style={imgStyle} src={Flying}></img> : galar.type.type2 === "fighting" ? <img style={imgStyle} src={Fighting}></img> : galar.type.type2 === "fairy" ? <img style={imgStyle} src={Fairy}></img> : galar.type.type2 === "electric" ? <img style={imgStyle} src={Electric}></img> : galar.type.type2 === "fire" ? <img style={imgStyle} src={Fire}></img> : galar.type.type2 === "ghost" ? <img style={imgStyle} src={Ghost}></img> : galar.type.type2 === "psychic" ? <img style={imgStyle} src={Psychic}></img> : galar.type.type2 === "rock" ? <img style={imgStyle} src={Rock}></img> : galar.type.type2 === "water" ? <img style={imgStyle} src={Water}></img> : galar.type.type2 === "normal" ? <img style={imgStyle} src={Normal}></img> : galar.type.type2 === "steel" ? <img style={imgStyle} src={Steel}></img> : galar.type.type2 === "bug" ? <img style={imgStyle} src={Bug}></img> : galar.type.type2 === "ground" ? <img style={imgStyle} src={Ground}></img> : galar.type.type2 === "dark" ? <img style={imgStyle} src={Dark}></img> : null} 
     
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>     
                                         </>
                                     )
                                 })
                             }
                         </div>
                     </div>
                 </div>
             </>
        )
    }
}

export default Kanto;