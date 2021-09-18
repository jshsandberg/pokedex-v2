import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! Looks like a pokemon could not make it due to the PokeAPI forgetting about him/her!</Alert.Heading>
          <p>
            The pokemon currently not available is Gurdurr
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  


  export default AlertDismissibleExample;