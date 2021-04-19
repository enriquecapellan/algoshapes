import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { bubbleSort, getSquarePerimeter } from '../utils/utils'
import { Btn, SuccessBtn } from './Btn'
import Title from './Title'

const Wrapper = styled('div')`
	width: 15%;
	align-items: center;
	display: flex;
	flex-direction: column;
	border: 1px solid white;
`

const Item = styled('div')`
	width: 100%;
	height: 40px;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
	align-items: center;
	justify-content: center;
	display: flex;
	color: white;
	font-size: 15px;
`

interface AreasProps {
	areas: Area[]
}

export default function Areas({ areas }: AreasProps) {
	const [values, setValues] = useState<Area[]>([])
	const [promedio, setPromedio] = useState<number>(0)

	useEffect(() => {
		setValues(areas)
	}, [areas])

	function orderAreas() {
		const sortedValues = [...areas]
		let n, i, k, aux
		n = sortedValues.length
		for (k = 1; k < n; k++) {
			for (i = 0; i < n - k; i++) {
				if (sortedValues[i].value > sortedValues[i + 1].value) {
					aux = sortedValues[i].value
					sortedValues[i].value = sortedValues[i + 1].value
					sortedValues[i + 1].value = aux
				}
			}
		}

		setValues(sortedValues)
	}

	useEffect(() => {
		let sum = getSquarePerimeter(areas.map((area) => area.value))
		setPromedio(sum / areas.length)
	}, [areas])

	return (
		<Wrapper>
			<Title>Areas</Title>
			<Btn fullWidth onClick={orderAreas}>
				Order
			</Btn>
			<span>Promedio: {promedio}</span>
			{values.map((area) => (
				<Item>
					<span>
						{area.type}: {area.value}
					</span>
				</Item>
			))}
		</Wrapper>
	)
}
