import styled from '../../styles/themed-components';
const StyledP = styled.p`
  ${props => props.theme.media.tablet`
    color: black;
    font-size: 5rem;
  `}
  color: ${props => props.theme.color.blue};
  font-size: 10rem;
	div {
		p {
		}
	}
`;

interface ISample {
  visible: boolean;
}

const StyledSample = styled('span')<ISample>`
  visibility: ${p => p.visible ? 'visible' : 'hidden'};
`;

interface IProps {
  text?: string;
}

const Test = (props: IProps) => (
  <StyledP>
    <StyledSample visible={true}>🐶{props.text}🦄🐔</StyledSample>
  </StyledP>
);

export default Test;
