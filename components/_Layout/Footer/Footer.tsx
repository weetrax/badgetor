import * as React from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-dark-600 backdrop-filter backdrop-blur bg-opacity-70">
      <Container>
        <ul className="py-12 text-center">
          <li>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold">Badgetor </span> - An{" "}
              <a
                href="https://elrond.com/"
                target={"_blank"}
                rel="noreferrer"
                className="hover:text-primary-500 duration-200 transition-colors ease-in-out"
              >
                Elrond
              </a>{" "}
              Community App
            </p>
          </li>
          <li className="flex items-center justify-center">
            <img className="pr-1" width={25} height={25} src="/assets/img/egld-logo.svg" />
            Donation:
            <a
              href="https://explorer.elrond.com/accounts/erd1l9gr2fn7qy86q26xqj4wmner5evkz8q277nerckd8xy5502klzjs5mxcfr"
              target={"_blank"}
              rel="noreferrer"
              className="pl-1 whitespace-nowrap text-ellipsis overflow-hidden hover:text-primary-500 duration-200 transition-colors ease-in-out"
            >
              erd1l9gr2fn7qy86q26xqj4wmner5evkz8q277nerckd8xy5502klzjs5mxcfr
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  //
};

export default Footer;
