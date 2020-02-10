import styled from '../styles/themed-components';

interface IProps {}

const StyledDog = styled.div``;

const Dog = (props: IProps) => {
  const {} = props;
  return (
    <StyledDog>
      Dog
    </StyledDog>
  );
};

export default Dog;
