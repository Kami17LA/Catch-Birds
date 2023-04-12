import { useState } from "react"

export default function Header(){

	const [contsRosas, setContRosas] = useState(0);
	const [contsAzules, setContAzules] = useState(0);
	

	return(
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
	)
}