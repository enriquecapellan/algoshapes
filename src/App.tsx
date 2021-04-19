import React, { useState } from 'react'
import './App.css'
import Areas from './components/Areas'
import NumberList from './components/NumberList'
import Perimeters from './components/Perimeters'
import Shapes from './components/Shapes'

function App() {
	const [shapes, setShapes] = useState<JSX.Element[]>([])
	const [areas, setAreas] = useState<Area[]>([])
	const [perimeters, setPerimeters] = useState<Perimeter[]>([])

	return (
		<div className="App">
			<header className="App-header">
				<NumberList
					setShapes={setShapes}
					setPerimeters={setPerimeters}
					setAreas={setAreas}
				/>
				<Shapes shapes={shapes} />
				<Areas areas={areas} />
				<Perimeters perimeters={perimeters} />
			</header>
		</div>
	)
}

export default App
