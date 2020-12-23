import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Cards(props) {



    const [cardPokemon, setCardPokemon] = useState(props.pokemon);

    console.log(props.pokemon)

    return (
        <>
        {/* {props.pokemon.map((galar, i) => {
            return (
                <>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={galar.sprites.front_default} />
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
        })} */}
             
      
        </>
    )
}

export default Cards