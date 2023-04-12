import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import aveAzul from "./images/aveAzul.png";
import aveRosa from "./images/aveRosa.png";
import casaPajaros from "./images/casaPajaros.png"

function App() {
  return (
    <>
    <Container className='box-container'>
      <Row>
        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveRosa} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveAzul} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>


        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveRosa} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

      </Row>
      <Row>
        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveAzul} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveRosa} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveAzul} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

      </Row>
      <Row>
        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveRosa} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveAzul} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

        <div className='card'>
          <Col className='face birds' sm={4}><img src={aveRosa} alt='img-rosa'></img></Col>
          <Col className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></Col>
        </div>

      </Row>
    </Container>
    </>
  );
}

export default App;
