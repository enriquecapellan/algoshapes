import styled from 'styled-components'

interface RhombusProps {
	width: number
	height: number
}

const Rhombus = styled('div')`
	background: linear-gradient(to top right, #007bff 49.5%, transparent 50%) top
			right,
		linear-gradient(to top left, #007bff 49.5%, transparent 50%) top left,
		linear-gradient(to bottom right, #007bff 49.5%, transparent 50%) bottom
			right,
		linear-gradient(to bottom left, #007bff 49.5%, transparent 50%) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;
	display: inline-block;
	margin: 5px;
	transform: rotate(90deg);
	width: ${({ width }: RhombusProps) => width + 'px'};
	height: ${({ height }: RhombusProps) => height + 'px'};
`
export default Rhombus
