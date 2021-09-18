import React, {useEffect, useState} from "react";
import Background from "../../utils/Background/Galar.jpg";
import axios from "axios"; 
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


import "../GalarRegion/style.css"

function Galar() {


    const [pokemon, setPokemon] = useState();
    const [isLoading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: 'https://pokeapi.co/api/v2/pokedex/galar/',
                });
                const { pokemon_entries } = response.data;
                
                const galarPokemon = [];

                for (let i = 0; i < pokemon_entries.length; i++) {

                    if (i !== 171){
                    const response = await axios.get(pokemon_entries[i].pokemon_species.url);

                    const pokemonResponse = await axios.get(response.data.varieties[0].pokemon.url);

                    const evolutionResponse = await axios.get(response.data.evolution_chain.url);

                    console.log(evolutionResponse.data.chain)

                    const chain = [
                                    evolutionResponse.data.chain.species.name, 
                                    evolutionResponse.data.chain.evolves_to[0] !== undefined ? evolutionResponse.data.chain.evolves_to[0].species.name : null, 
                                    evolutionResponse.data.chain.evolves_to[0] === undefined ? null : evolutionResponse.data.chain.evolves_to.length === 2 ? evolutionResponse.data.chain.evolves_to[1].species.name : evolutionResponse.data.chain.evolves_to[0].evolves_to[0] !== undefined ? evolutionResponse.data.chain.evolves_to[0].evolves_to[0].species.name : null,
                                    evolutionResponse.data.chain.evolves_to[0] === undefined ? null : evolutionResponse.data.chain.evolves_to.length === 2 ? evolutionResponse.data.chain.evolves_to[1].species.name : evolutionResponse.data.chain.evolves_to[0].evolves_to.length === 2 ? evolutionResponse.data.chain.evolves_to[0].evolves_to[1].species.name : evolutionResponse.data.chain.evolves_to[0].evolves_to[0] !== undefined ? evolutionResponse.data.chain.evolves_to[0].evolves_to[0].species.name : null
                                ] 

                    const pounds = (pokemonResponse.data.weight * .22);

                    let inches = (pokemonResponse.data.height * 3.937).toFixed(0);
                    const feet = Math.floor(inches / 12);
                    inches %= 12;
                    if (inches.toString().length != 2) {
                        inches = "0" + inches
                    };

                    let flavor_text = response.data.flavor_text_entries;

                    const info = []

                    const getInfo = () => {
                        for (let i = 0; i < flavor_text.length; i++) {
                            if (flavor_text[i].language.name === "en") { 
                                info.push(flavor_text[i].flavor_text);
                            }
                        }
                    };

                    getInfo();

                    const finalInfo = [...new Set(info)];


                    let skeletonPokemon = {
                        name: pokemon_entries[i].pokemon_species.name,
                        id: response.data.id.toString().length === 3 ? response.data.id : response.data.id.toString().length === 2 ? "0" + response.data.id : "00" + response.data.id,
                        height: feet + "'" + " " + inches + "''",
                        weight: pounds + " lb",
                        evolutions: chain,
                        // Can not tell if a 4 evolution pokemon is special or not, could maybe do it in the pokemon component and check if the array has all unique elements then render them rather than checfk ehre
                        special_evolution: evolutionResponse.data.chain.evolves_to.length === 0 ? false : evolutionResponse.data.chain.evolves_to.length === 1 ? false : evolutionResponse.data.chain.evolves_to[0].evolves_to.length === 1 ? false : true,
                        description: finalInfo,
                        stats: {
                                    hp: pokemonResponse.data.stats[0].base_stat,
                                    atk: pokemonResponse.data.stats[1].base_stat,
                                    def: pokemonResponse.data.stats[2].base_stat,
                                    spa: pokemonResponse.data.stats[3].base_stat,
                                    spd: pokemonResponse.data.stats[4].base_stat,
                                    spe: pokemonResponse.data.stats[5].base_stat,
                                },
                        ability: {
                                ability1: {
                                            name: pokemonResponse.data.abilities[0].ability.name,
                                            url: pokemonResponse.data.abilities[0].ability.url
                                        },
                                ability2: pokemonResponse.data.abilities.length >= 2 ? {
                                            name: pokemonResponse.data.abilities[1].is_hidden ? null : pokemonResponse.data.abilities[1].ability.name,
                                            url: pokemonResponse.data.abilities[1].is_hidden ? null : pokemonResponse.data.abilities[1].ability.url,
                                } : null
                            },
                        type: {
                                type1: pokemonResponse.data.types[0].type.name,
                                type2: pokemonResponse.data.types.length === 2 ? pokemonResponse.data.types[1].type.name : ""                              
                            }
                    }

                    galarPokemon.push(skeletonPokemon);
                    console.log(skeletonPokemon, i)
                    
                }
            }


                setPokemon(galarPokemon)
                setLoading(false)

              
         
            } catch (err) {
                console.log(err)
            };      
        }
        fetchData();
        }, [])

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

export default Galar