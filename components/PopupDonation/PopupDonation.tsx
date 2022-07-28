import * as React from "react";
import PropTypes from "prop-types";
import Popup from "../_Layout/Popup";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import EthereumIcon from "../_Layout/Icons/EthereumIcon";
import ElrondIcon from "../_Layout/Icons/ElrondIcon";
import BitcoinIcon from "../_Layout/Icons/BitcoinIcon";
import TronIcon from "../_Layout/Icons/TronIcon";
import BNBIcon from "../_Layout/Icons/BNBIcon";

type PopupDonationProps = {
  btnElement: (onClick: () => void) => JSX.Element;
};

type DonationItemProps = {
  name: string;
  address: string;
  svg: React.ReactNode;
};

const donationItems: DonationItemProps[] = [
  {
    name: "ESDT",
    address: "erd1l9gr2fn7qy86q26xqj4wmner5evkz8q277nerckd8xy5502klzjs5mxcfr",
    svg: <ElrondIcon />,
  },
  {
    name: "BTC",
    address: "bc1q0yvwj7ehxkllntql6yxkw0sz4eplgvl56y66m2",
    svg: <BitcoinIcon />,
  },
  {
    name: "ERC20",
    address: "0x7f0A95a371B3a3a0F72662c4aDB264eE17E3772e",
    svg: <EthereumIcon />,
  },
  {
    name: "BEP20",
    address: "0x461C3b9249BCFb89169f03a3C00768C855AFae51",
    svg: <BNBIcon />,
  },
  {
    name: "TRC20",
    address: "TRik8cz518kgw2iPEyMnWywddExGREfeEd",
    svg: <TronIcon />,
  },
];

const PopupDonation: React.FC<PopupDonationProps> = ({ btnElement }) => {
  return (
    <Popup title="" btnElement={btnElement}>
      <p className="text-lg font-semibold underline mb-2 text-semibold">
        Hey !
      </p>
      <p className="mb-4">
        You can support our work by giving us a little donation. It will help us
        to finance our website and the hosting.
      </p>
      <div className="flex flex-col gap-6 mb-4">
        {donationItems.map((x) => {
          return (
            <DonationItem
              key={x.address}
              name={x.name}
              address={x.address}
              svg={x.svg}
            />
          );
        })}
      </div>
      <p className="text-right text-primary-500">Thanks !</p>
    </Popup>
  );
};

const DonationItem: React.FC<DonationItemProps> = ({ name, address, svg }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="pr-1">{svg}</div>
      <div className="truncate">
        {name}:{" "}
        <CopyToClipboard
          text={address}
          onCopy={() => toast.success("Address copied to clipboard")}
        >
          <span className="text-primary-500 hover:text-primary-400 cursor-pointer">
            {address}
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
};

PopupDonation.propTypes = {
  //
};

export default PopupDonation;
