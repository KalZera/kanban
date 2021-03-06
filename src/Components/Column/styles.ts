import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div<{ color: string }>`
	display: flex;
	flex-direction: column;
	background-color: blue;
	padding: 0.5rem;
	margin-left: 0.6rem;
	min-width: 315px;
	height: fit-content;
	border-radius: 12px;

	background-color: ${props => props.color};

	${media.lessThan('small')`
		margin-bottom: 0.6rem;
	`}
`;

export const TitleColumn = styled.div`
	margin: 1rem 0.5rem;
	color: white;
	font-size: 18px;
	font-weight: 500;
`;

export const DeleteButton = styled.div`
	background-color: #9a9a9a;
	height: min-content;
	border-radius: 100%;
	padding: 0.2rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		height: 15px;
	}

	&:hover {
		background-color: #d0d0d0;
	}
`;

export const SectionTitle = styled.div`
	display: flex;
	justify-content: space-between;
`;
