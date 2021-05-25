import styled from 'styled-components';

export const Container = styled.div`
	margin: 1rem;
`;

export const Body = styled.div`
	margin-top: 0.5rem;
`;

export const CloseButton = styled.div`
	background-color: #9a9a9a;
	border-radius: 100%;
	padding: 0.2rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		width: 100%;
		height: 15px;
	}

	&:hover {
		background-color: #d0d0d0;
	}
`;
