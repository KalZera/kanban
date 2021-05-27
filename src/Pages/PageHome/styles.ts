import styled from 'styled-components';
import media from 'styled-media-query';

export const Title = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
	font-size: 32px;
	font-weight: 700;
`;

export const ColumnGroups = styled.div`
	display: flex;

	${media.lessThan('small')`
		flex-direction:column;
	`}
`;

export const ButtonAddColumn = styled.div`
	height: fit-content;
	display: flex;
	min-width: 315px;
	background-color: blue;
	padding: 1rem;
	margin-left: 0.5rem;
`;
export const ButtonAddTag = styled.div`
	height: fit-content;
	display: flex;
	min-width: 315px;
	padding: 1rem;
	margin-left: 0.5rem;
`;
