import {
	Rectangle,
	Circle,
	Ellipse,
	Line,
	Polyline,
	CornerBox,
	Triangle
} from 'react-shapes'
import styled from 'styled-components'

const Wrapper = styled('div')`
	display: flex;
	flex-direction: row;
	overflow-y: scroll;
	width: 50%;
	height: 100%;
	align-items: center;
	flex-wrap: wrap;
`
const Shape = styled('div')`
	display: flex;
	flex-direction: column;
	width: 50%;
	align-items: center;
`

interface ShapesProps {
	shapes: JSX.Element[]
}

export default function Shapes({ shapes }: ShapesProps) {
	return (
		<Wrapper>
			{shapes.map((shape: JSX.Element) => (
				<Shape>{shape}</Shape>
			))}
		</Wrapper>
	)
}
