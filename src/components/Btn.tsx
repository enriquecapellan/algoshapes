import styled from 'styled-components'

const Btn = styled('button')`
	width: ${({ fullWidth }: { fullWidth?: boolean }) =>
		fullWidth ? '95%' : 'auto'};
	border-radius: 5px;
	background-color: red;
	color: white;
	padding: 0.5em 2em;
	height: 3em;
	border: none;
	cursor: pointer;
	margin: 5px;
	&:disabled {
		background-color: #8d8b8b;
		cursor: not-allowed;
	}
`

const SuccessBtn = styled(Btn)`
	background-color: green;
`

export { Btn, SuccessBtn }
