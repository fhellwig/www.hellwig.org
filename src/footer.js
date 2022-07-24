import trust from './positivessl.png';

export function Footer() {
  return (
    <footer id="footer">
      <div className="columns is-vcentered">
        <div className="column has-text-centered">
          Please contact me via <a href="tel:5712076308">phone</a> or{' '}
          <a href="mailto:frank@hellwig.org">email</a>
        </div>
        <div className="column has-text-centered">Build: 220724.03</div>
        <div className="column has-text-centered">
          <img src={trust} />
        </div>
      </div>
    </footer>
  );
}
