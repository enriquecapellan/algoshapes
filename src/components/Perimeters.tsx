import { Btn, SuccessBtn } from './Btn'
import styled from 'styled-components'
import Title from './Title'
import { useEffect, useState } from 'react'
import { getMedian } from '../utils/utils'

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

interface PerimeterProps {
	perimeters: Perimeter[]
}

export default function Perimeters({ perimeters }: PerimeterProps) {
	const [values, setValues] = useState<Perimeter[]>([])
	const [median, setMedian] = useState<number>(0)

	useEffect(() => {
		setValues(perimeters)
	}, [perimeters])

	function orderPerimeters() {
		const sortedValues = [...perimeters]
		let n, i, k, aux
		n = sortedValues.length
		for (k = 1; k < n; k++) {
			for (i = 0; i < n - k; i++) {
				if (sortedValues[i].value < sortedValues[i + 1].value) {
					aux = sortedValues[i].value
					sortedValues[i].value = sortedValues[i + 1].value
					sortedValues[i + 1].value = aux
				}
			}
		}

		setValues(sortedValues)
	}

	useEffect(() => {
		const med = getMedian(perimeters.map((value) => value.value))
		setMedian(med)
	}, [perimeters])

	return (
		<Wrapper>
			<Title>Perimetros</Title>
			<Btn fullWidth onClick={orderPerimeters}>
				Order
			</Btn>
			<span>Mediana: {median}</span>
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
