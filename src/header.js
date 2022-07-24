import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 2em;
  color: white;
  background-color: cornflowerblue;
`;

export function Header() {
  return (
    <StyledHeader>
      <h1>
        <span>Frank&nbsp;Hellwig</span>
      </h1>
    </StyledHeader>
  );
}
