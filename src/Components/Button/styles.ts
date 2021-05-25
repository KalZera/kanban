import styled from 'styled-components';

type typeButton = 'button' | 'link';
export const Container = styled.button<{ typestyle: typeButton }>`
	${props => {
		if (props.typestyle === 'button') {
			return { backgroundColor: '#06a94d', padding: '0.35rem 1rem' };
		} else {
			return { backgroundColor: 'transparent', padding: '0.35rem' };
		}
	}}
	color: white;
	border: none;
	border-radius: 5px;
	text-align: initial;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;

	&:hover {
		text-decoration: underline;
	}
`;
