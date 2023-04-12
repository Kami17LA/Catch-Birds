import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import aveAzul from "./images/aveAzul.png";
import aveRosa from "./images/aveRosa.png";
import Card from './Card';
import Header from './Header';

function App() {

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const cartas = numeros.map((numero) => {
    const esPar = numero % 2 === 0;
    const ave = esPar ? aveRosa : aveAzul;

    return (
      <>
        <Card bird = {ave}></Card>
      </>
    );
  });

  return (
    <>
    <Header></Header>
    <Container className='box-container'>
      {cartas}
    </Container>
    </>
  );
}

export default App;
