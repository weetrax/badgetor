import * as React from "react";
import Container from "../Container";
import PropTypes from "prop-types";
import PopupDonation from "../../PopupDonation";

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
              <span className="font-bold text-primary-500">Badgetor </span> - An{" "}
              <a
                href="https://elrond.com/"
                target={"_blank"}
                rel="noreferrer"
                className="hover:text-primary-500 duration-200 transition-colors ease-in-out"
              >
                Elrond
              </a>{" "}
              Community App dev by{" "}
              <a
                href="https://twitter.com/weetrax"
                target={"_blank"}
                rel="noreferrer"
                className="text-primary-500 hover:text-primary-400 cursor-pointer focus:outline-none"
              >
                @weetrax
              </a>
            </p>
          </li>
          <li className="flex items-center justify-center">
            <PopupDonation
              btnElement={(onClick) => (
                <button
                  onClick={onClick}
                  className="text-primary-500 hover:text-primary-400 focus:outline-none"
                >
                  Donation
                </button>
              )}
            />
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
