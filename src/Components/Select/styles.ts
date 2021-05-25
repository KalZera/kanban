import styled from 'styled-components';

export const Container = styled.select`
	width: 100%;
	border-radius: 5px;
	margin: 0.3rem 0;
	//estilo bootstrap
	padding: 0.375rem 0.5rem;
	border: 0.1rem solid #ced4da;

	&:focus {
		border-color: #80bdff;
		outline: 0;
		box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
	}
`;
