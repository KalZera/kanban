import styled from 'styled-components';

export const Container = styled.div<{ colorTag: string }>`
	padding: 0.2rem 0.5rem;
	margin: 0.5rem 0.2rem;
	background-color: ${props => props.colorTag};
	color: white;
	border-radius: 5px;
	width: fit-content;
`;
