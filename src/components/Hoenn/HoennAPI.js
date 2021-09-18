import axios from "axios";

export const HoennAPI = async () => {

    try {
        const response = await axios({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokedex/hoenn/',
        });
        const { pokemon_entries } = response.data;
        
        const hoennPokemon = [];

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

            hoennPokemon.push(skeletonPokemon);
            console.log(skeletonPokemon, i);
            
        }
    }


        
        return hoennPokemon

      
 
    } catch (err) {
        console.log(err)
    };      
}