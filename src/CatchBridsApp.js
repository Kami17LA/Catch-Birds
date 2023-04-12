import './App.css';
import React from 'react';
import { Container} from 'react-grid-system';
import aveAzul from "./images/aveAzul.png";
import aveRosa from "./images/aveRosa.png";
import Card from './Card';
import { useState } from "react"

function App() {

  // Código para el contador
  const [contsRosas, setContRosas] = useState(0);
	const [contsAzules, setContAzules] = useState(0);
	
  const countBirds = (numero) => {
    const idAve = numero % 2 === 0 ? aveRosa : aveAzul;
    if(idAve === aveRosa){
      setContRosas(contsRosas +1)
    } else {
      setContAzules(contsAzules +1)
    }
  }


  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const cartas = numeros.map((numero) => {
    const esPar = numero % 2 === 0;
    const ave = esPar ? aveRosa : aveAzul;

    return (

      <Card 
        key={numero}
        onClick={countBirds} 
        bird= {ave}
      />
   
    );
  });

  
  return (
    <>
    <header className="">
			<div>
				<p>Aves rosas</p>
				<p>{contsRosas}</p>
			</div>

			<div>
				<p>Aves azules</p>
				<p>{contsAzules}</p>
			</div>

			<div>
				<p>Tiempo restante</p>
				<p></p>
			</div>
		</header>

    <Container className='box-container'>
      {cartas}
    </Container>
    </>
  );
}

export default App;
