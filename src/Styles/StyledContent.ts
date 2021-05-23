import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
	width: 70%;
	/* background-color: yellow; */
	margin: 0 auto;

	${media.lessThan('medium')`
    width: 85%;
  `}
	${media.lessThan('small')`
    width: 95%;
  `}
`;
