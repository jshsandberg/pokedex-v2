import React, {useEffect, useState} from "react";
import Background from "../../utils/Background/Galar.jpg";
import axios from "axios"; 
import { useHistory } from "react-router-dom";

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

                    const response = await axios.get(pokemon_entries[i].pokemon_species.url);

                    const pokemonResponse = await axios.get(response.data.varieties[0].pokemon.url);

                    const evolutionResponse = await axios.get(response.data.evolution_chain.url);

                    const chain = {
                                    first: evolutionResponse.data.chain.species.name != undefined ? evolutionResponse.data.chain.species.name: null,
                                    second: evolutionResponse.data.chain.evolves_to.length != 0 ? evolutionResponse.data.chain.evolves_to[0].species.name : null,
                                    third: evolutionResponse.data.chain.species.name === "delibird" ? null : evolutionResponse.data.chain.species.name === "basculin" ? null : evolutionResponse.data.chain.species.name === "wishiwashi" ? null : evolutionResponse.data.chain.species.name === "pyukumuku" ? null : evolutionResponse.data.chain.species.name === "stunfisk" ? null : evolutionResponse.data.chain.species.name === "shuckle" ? null : evolutionResponse.data.chain.species.name === "throh" ? null : evolutionResponse.data.chain.species.name === "sawk" ? null : evolutionResponse.data.chain.species.name === "sableye" ? null : evolutionResponse.data.chain.species.name === "mawile" ? null : evolutionResponse.data.chain.species.name === "maractus" ? null : evolutionResponse.data.chain.species.name === "sigilyph" ? null : evolutionResponse.data.chain.species.name === "torkoal" ? null : evolutionResponse.data.chain.species.name === "mimikyu" ? null : evolutionResponse.data.chain.species.name === "qwilfish" ? null : evolutionResponse.data.chain.species.name === "cramorant" ? null : evolutionResponse.data.chain.species.name === "durant" ? null : evolutionResponse.data.chain.species.name === "heatmor" ? null : evolutionResponse.data.chain.species.name === "hawlucha" ? null : evolutionResponse.data.chain.species.name === "indeedee" ? null : evolutionResponse.data.chain.species.name === "oranguru" ? null : evolutionResponse.data.chain.species.name === "passimian" ? null : evolutionResponse.data.chain.species.name === "morpeko" ? null : evolutionResponse.data.chain.species.name === "falinks" ? null : evolutionResponse.data.chain.species.name === "drampa" ? null : evolutionResponse.data.chain.species.name === "turtonator" ? null : evolutionResponse.data.chain.species.name === "togedemaru" ? null : evolutionResponse.data.chain.species.name === "pincurchin" ? null : evolutionResponse.data.chain.species.name === "dhelmise" ? null : evolutionResponse.data.chain.species.name === "lapras" ? null : evolutionResponse.data.chain.species.name === "lunatone" ? null : evolutionResponse.data.chain.species.name === "solrock" ? null : evolutionResponse.data.chain.species.name === "stonjourner" ? null : evolutionResponse.data.chain.species.name === "eiscue" ? null : evolutionResponse.data.chain.species.name === "duraludon" ? null : evolutionResponse.data.chain.species.name === "rotom" ? null : evolutionResponse.data.chain.species.name === "ditto" ? null : evolutionResponse.data.chain.species.name === "dracozolt" ? null : evolutionResponse.data.chain.species.name === "arctozolt" ? null : evolutionResponse.data.chain.species.name === "dracovish" ? null : evolutionResponse.data.chain.species.name === "arctovish" ? null : evolutionResponse.data.chain.species.name === "zacian" ? null : evolutionResponse.data.chain.species.name === "zamazenta" ? null : evolutionResponse.data.chain.species.name === "eternatus" ? null : evolutionResponse.data.chain.evolves_to[0].evolves_to.length === 1 ? evolutionResponse.data.chain.evolves_to[0].evolves_to[0].species.name : evolutionResponse.data.chain.evolves_to.length === 2 ? evolutionResponse.data.chain.evolves_to : null,

                    };

                    const pounds = (pokemonResponse.data.weight * .22)

                    let inches = (pokemonResponse.data.height * 3.937).toFixed(0);
                    const feet = Math.floor(inches / 12);
                    inches %= 12;
                    if (inches.toString().length != 2) {
                        inches = "0" + inches
                    }

                    let skeletonPokemon = {
                        name: pokemon_entries[i].pokemon_species.name,
                        id: response.data.id.toString().length === 3 ? response.data.id : response.data.id.toString().length === 2 ? "0" + response.data.id : "00" + response.data.id,
                        height: feet + "'" + " " + inches + "''",
                        weight: pounds + " lb",
                        evolutions: chain,
                        description: response.data.flavor_text_entries[17].flavor_text,
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

   if (isLoading) {
       return (
                <div>
                    <h1>LOADING...</h1>
                </div>
            ) 
   } else {

    return (
        <>      
            <div style={ background }>
                <div className="container">
                    <div className="row">
                        {
                            pokemon && pokemon.map((galar, i) => {
                                return (
                                    <>
                                        <div style={{backgroundColor: "white"}} className="col-3">
                                            <div onClick={() => history.push({
                                                pathname: `/pokemon/${galar.name}`, 
                                                state: galar,
                                                })
                                                } className="card">
                                                <img className="card-img" src={`https://www.serebii.net/swordshield/pokemon/${galar.id}.png`} alt={galar.id}></img>
                                            </div>
                                            <div className="card-text">
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
                                                        <h6>{galar.type.type1} {galar.type.type2}</h6>
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