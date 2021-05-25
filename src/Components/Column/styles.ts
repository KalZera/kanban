import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
	display: flex;
	flex-direction: column;
	background-color: blue;
	padding: 0.5rem;
	margin-left: 10px;
	min-width: 315px;
	height: fit-content;
	border-radius: 12px;

	background-color: ${props => props.color};
`;

export const TitleColumn = styled.div`
	margin: 1rem 0.5rem;
	color: white;
	font-size: 18px;
	font-weight: 500;
`;
