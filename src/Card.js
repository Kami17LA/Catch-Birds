
import casaPajaros from "./images/casaPajaros.png"

export default function Card({bird}){
	const card = document.querySelector('.card');

  const clickCard = (e) => {
    e.currentTarget.style.transform = "rotateY(180deg)";
  }

	return (
	<div className='card' onClick={clickCard}>
		<div className='face birds' sm={4}><img src={bird} alt='img-bird'></img></div>
		<div className='face casa-pajaros' sm={4}><img src={casaPajaros} alt='casa-pajaros'></img></div>
	</div>
	)
}