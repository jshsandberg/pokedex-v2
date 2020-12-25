import React, {useEffect, useState} from "react";
import Background from "../../utils/Background/Galar.jpg";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Galar() {


    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: 'https://pokeapi.co/api/v2/pokedex/kanto/',
                });
                const { pokemon_entries } = response.data;
                
                const galarPokemon = [];

                for (let i = 0; i < pokemon_entries.length; i++) {

                    const response = await axios.get(pokemon_entries[i].pokemon_species.url);

                    const pokemonResponse = await axios.get(response.data.varieties[0].pokemon.url);

                    let skeletonPokemon = {
                        name: pokemon_entries[i].pokemon_species.name,
                        id: response.data.id.toString().length === 3 ? response.data.id : response.data.id.toString().length === 2 ? "0" + response.data.id : "00" + response.data.id,
                        description: response.data.flavor_text_entries[16],
                        stats: {
                                    hp: pokemonResponse.data.stats[0].base_stat,
                                    atk: pokemonResponse.data.stats[1].base_stat,
                                    def: pokemonResponse.data.stats[2].base_stat,
                                    spa: pokemonResponse.data.stats[3].base_stat,
                                    spd: pokemonResponse.data.stats[4].base_stat,
                                    spe: pokemonResponse.data.stats[5].base_stat,
                                },
                        type: {
                                type1: pokemonResponse.data.types[0].type.name,
                                type2: pokemonResponse.data.types.length === 2 ? pokemonResponse.data.types[1].type.name : "NA"                              
                            }
                    }

                    galarPokemon.push(skeletonPokemon)
                    
                }

              


                setPokemon(galarPokemon)

              
         
            } catch (err) {
                console.log(err)
            };      
        }
        fetchData();
        }, [])

   const background = {
       backgroundImage: `url(${Background})`
   }

  
   


    return (
        <>
            <div style={ background }>

   {pokemon && pokemon.map((galar, i) => {
            return (
                <>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://www.serebii.net/swordshield/pokemon/${galar.id}.png`}/>
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
          </>

            )
        })}  
                </div>
        </>
    )
}

export default Galar