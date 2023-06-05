import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  background-color: lightgray;
  /* 테마 사용해보기 */
  /* background-color: ${props => props.theme.grayBg}; */
`;

const Block = styled.div`
  padding: ${props => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue',
  },
  {
    label: '4',
    padding: '2rem',
    backgroundColor: `black`,
  }
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => {
        return (
          <Block
            key={blockItem.label}
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  )
};

export default Blocks;