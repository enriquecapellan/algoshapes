import React, { useState } from 'react'
import styled from 'styled-components'
import {
	chunkArray,
	getSquareArea,
	getSquarePerimeter,
	getUniqueValues
} from '../utils/utils'
import { Rectangle, Circle } from 'react-shapes'
import { Btn, SuccessBtn } from './Btn'
import Rhombus from './Rhombus'
import Triangle from './Triangle'

const Input = styled('input')`
	height: 2.5em;
	border: 1px solid #1d1d1d;
	border-radius: 3px;
	padding: 2px 5px;
`

const ListItem = styled('div')`
	display: flex;
	justify-content: space-between;
	padding: 5px;
`

const AddComponent = styled('div')`
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
`

const Wrapper = styled('div')`
	width: 20%;
`

const Message = styled('span')`
	font-size: 15px;
`

interface Item {
	key: number
	value: number
}

interface NumberListProps {
	setShapes: (shapes: JSX.Element[]) => void
	setPerimeters: (perimeters: Perimeter[]) => void
	setAreas: (areas: Area[]) => void
}

export default function NumberList({
	setShapes,
	setPerimeters,
	setAreas
}: NumberListProps) {
	const [numbers, setNumbers] = useState<Item[]>([])
	const [value, setValue] = useState<number>(0)
	const [repeated2, setRepeated2] = useState<number>(0)
	const [repeated3, setRepeated3] = useState<number>(0)

	function addNumber() {
		setNumbers((prevNumbers) => [
			...prevNumbers,
			{ key: Math.round(Math.random() * 10000), value }
		])
	}

	function removeNumber(index: number) {
		setNumbers((prevNumbers) => {
			const values = [...prevNumbers]
			values.splice(index, 1)
			return values
		})
	}

	function calculate() {
		const areas: Area[] = []
		const perimeters: Perimeter[] = []
		const shapes: JSX.Element[] = []

		setRepeated3(0)
		setRepeated2(0)

		const groups = chunkArray(numbers, 3)
		groups.forEach((group) => {
			const [
				{ value: firstValue },
				{ value: secondValue },
				{ value: thirdValue }
			] = group
			if (firstValue === secondValue && firstValue === thirdValue) {
				setRepeated3((prev) => prev + 1)
				const squarePerimeter = getSquarePerimeter([
					firstValue,
					firstValue,
					firstValue,
					firstValue
				])
				const squareArea = getSquareArea(firstValue, firstValue)
				const circlePerimeter = 2 * Math.PI * firstValue
				const circleArea = Math.PI * Math.pow(firstValue, 2)

				areas.push({ type: 'Cuadrado', value: squareArea })
				areas.push({ type: 'Circulo', value: circleArea })
				perimeters.push({ type: 'Cuadrado', value: squarePerimeter })
				perimeters.push({ type: 'Circulo', value: circlePerimeter })

				shapes.push(
					<Rectangle
						width={firstValue}
						height={firstValue}
						fill={{ color: '#007bff' }}
						stroke={{ color: '#E65243' }}
						strokeWidth={1}
					/>
				)
				shapes.push(
					<Circle
						r={firstValue}
						fill={{ color: '#007bff' }}
						stroke={{ color: '#E65243' }}
						strokeWidth={1}
					/>
				)
			} else if (
				firstValue === secondValue ||
				secondValue === thirdValue ||
				thirdValue === firstValue
			) {
				setRepeated2((prev) => prev + 1)
				const [value1, value2] = getUniqueValues([
					firstValue,
					secondValue,
					thirdValue
				])
				perimeters.push({
					type: 'Rectangualo',
					value: getSquarePerimeter([value1, value2])
				})
				perimeters.push({
					type: 'Rombo',
					value: 2 * Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2))
				})

				areas.push({
					type: 'Rectangualo',
					value: getSquareArea(value1, value2)
				})
				areas.push({
					type: 'Rombo',
					value: (value1 * value2) / 2
				})

				shapes.push(
					<Rectangle
						width={value1}
						height={value2}
						fill={{ color: '#007bff' }}
						stroke={{ color: '#E65243' }}
						strokeWidth={1}
					/>
				)
				shapes.push(<Rhombus width={400} height={150} />)
			} else {
				const perimeter = getSquarePerimeter([
					firstValue,
					secondValue,
					thirdValue
				])
				perimeters.push({
					type: 'Triangulo',
					value: perimeter
				})
				const s = perimeter / 2
				areas.push({
					type: 'Triangulo',
					value: Math.sqrt(
						s * (s - firstValue) * (s - secondValue) * (s - thirdValue)
					)
				})
				shapes.push(<Triangle />)
			}
		})

		setShapes(shapes)
		setPerimeters(perimeters)
		setAreas(areas)
	}

	return (
		<Wrapper>
			<AddComponent>
				<Input
					value={value}
					onChange={(e) => {
						setValue(parseInt(e.target.value))
					}}
					type="number"
				/>
				<Btn disabled={!value || value < 1} onClick={addNumber}>
					Add
				</Btn>
				<SuccessBtn onClick={calculate}>Run</SuccessBtn>
			</AddComponent>
			<div style={{}}>
				<Message>Ternas con 2 numeros iguales: {repeated2}</Message>
				<br />
				<Message>Ternas con 3 numeros iguales: {repeated3}</Message>
			</div>
			<div>
				{[...numbers].reverse().map((item, index) => (
					<ListItem key={item.key}>
						<span>{item.value}</span>
						<Btn onClick={() => removeNumber(index)}>Remove</Btn>
					</ListItem>
				))}
			</div>
		</Wrapper>
	)
}
