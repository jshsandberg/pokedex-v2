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

                const urlPokemon = []
                
                await pokemon_entries.forEach(async(value) => {
                    await urlPokemon.push(value.pokemon_species.url)
                });

                const finalData = []
            
                const secondResponse = urlPokemon.map(async(item) => {
                    const res = await axios.get(item);
                    const urlResponse = res.data.varieties[0].pokemon.url;
                        const resData = await axios.get(urlResponse);
                        const { data } = resData;
                        await finalData.push(data);
                        console.log(finalData)
                        if (finalData.length === 150) {
                            setPokemon(finalData);
                        }

                        
                });       
         
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

        <img src="https://img.pokemondb.net/sprites/x-y/normal/pikachu.png" alt="Bulbasaur"></img>

   {pokemon && pokemon.map((galar, i) => {
            return (
                <>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://img.pokemondb.net/sprites/home/normal/${galar.species.name}.png`}/>
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