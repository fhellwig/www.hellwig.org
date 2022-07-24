import styled from 'styled-components';
import trust from './positivessl.png';

const StyledFooter = styled.footer`
  color: white;
  padding: 1rem;
  background-color: #333;
  a {
    color: yellow;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className="columns is-vcentered">
        <div className="column has-text-centered">
          Please contact me via <a href="tel:5712076308">phone</a> or{' '}
          <a href="mailto:frank@hellwig.org">email</a>
        </div>
        <div className="column has-text-centered">Build: 220724.02</div>
        <div className="column has-text-centered">
          <img src={trust} />
        </div>
      </div>
    </StyledFooter>
  );
}
