import PropTypes from 'prop-types';
import React from 'react';
import { NFT } from '../../types';
import { useEditor } from '../../hooks/useEditor';

type NFTInfoProps = {
  nft: NFT;
};

const NFTInfo: React.FC<NFTInfoProps> = ({ nft }) => {

  const { backgroundColor, primaryColor, secondaryColor } = useEditor()

  return (
    <div className="rounded" style={{ backgroundColor: backgroundColor }}>
      <div className="grid grid-cols-12 gap-2 justify-center h-full p-2 items-center">
        <div className="col-span-12 md:col-span-6 flex items-center">
          <img className="rounded md:max-h-96" src={nft.url}></img>
        </div>
        <div className="col-span-12 md:col-span-6 text-center md:text-left">
          <p className="mb-3">
            <span className="block font-bold text-3xl" style={{ color: primaryColor }}>Name</span>
            <span
              className="text-lg font-bold"
              style={{ color: secondaryColor }}
            >
              {nft.name}
            </span>
          </p>
          <p className="mb-3">
            <span className="block font-bold text-3xl" style={{ color: primaryColor }}>
              Token
            </span>
            <span className="text-lg font-bold"
              style={{ color: secondaryColor }}
            >
              {nft.identifier}
            </span>
          </p>
          <p className="mb-3">
            <span
              className="block font-bold text-3xl"
              style={{ color: primaryColor }}
            >
              Owner
            </span>
            <a
              href={`https://explorer.elrond.com/accounts/${nft.owner}`}
              target={"_blank"}
              rel="noreferrer"
              className="text-lg font-bold block whitespace-nowrap text-ellipsis overflow-hidden"
              style={{ color: secondaryColor }}
            >
              {nft.owner}
            </a>
          </p>
          <p className="mb-3">
            <span
              className="block font-bold text-3xl"
              style={{ color: primaryColor }}
            >
              Blockchain
            </span>
            <a
              href="https://elrond.com/"
              target={"_blank"}
              rel="noreferrer"
              className="text-lg font-bold"
              style={{ color: secondaryColor }}
            >
              Elrond
            </a>
          </p>
          <p className="mb-3">
            <span className="block font-bold text-3xl" style={{ color: primaryColor }}>
              Collection
            </span>
            <span
              className="text-lg font-bold"
              style={{ color: secondaryColor }}
            >
              {nft.collection}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

NFTInfo.propTypes = {
  //
};

export default NFTInfo;
