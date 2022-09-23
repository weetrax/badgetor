import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { NFT } from "../../types";
import { useEditor } from "../../hooks/useEditor";

type NFTInfoProps = {
  nft: NFT;
};

const NFTInfo: React.FC<NFTInfoProps> = ({ nft }) => {
  const { backgroundColor, primaryColor, secondaryColor, qrColor, qrBgColor } =
    useEditor();

  const getQrColorHexa = () => {
    let _qrColor = qrColor;
    if (qrColor.startsWith("#")) {
      _qrColor = _qrColor.slice(1, qrColor.length);
    }
    return _qrColor;
  };

  const getQrBgColorHexa = () => {
    let _qrBgColor = qrBgColor;
    if (qrBgColor.startsWith("#")) {
      _qrBgColor = _qrBgColor.slice(1, qrBgColor.length);
    }
    return _qrBgColor;
  };

  const [qrCodeUrl, setQrCodeUrl] = useState<string>(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${nft.url
    }&bgcolor=${getQrBgColorHexa()}&color=${getQrColorHexa()}`
  );

  useEffect(() => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${nft.url
      }&bgcolor=${getQrBgColorHexa()}&color=${getQrColorHexa()}`;
    setQrCodeUrl(url);
  }, [nft, qrColor, qrBgColor]);

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) {
          .erd-info {
            width: calc(100% - 384px);
          }
        }
      `}</style>

      <div
        className="rounded relative"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="w-20 h-20 absolute right-2 top-2 hidden md:block">
          <img src={qrCodeUrl} alt="qr code" />
        </div>
        <div className="flex flex-col md:flex-row h-full items-center">
          <div className="" style={{ minWidth: "384px" }}>
            <img
              className="rounded-l md:max-h-96"
              src={nft.media[0]?.thumbnailUrl ?? nft.url}
            ></img>
          </div>
          <div className="text-center py-2 px-2 md:py-0 md:text-left w-full erd-info">
            <p className="mb-3">
              <span
                className="block font-bold text-3xl"
                style={{ color: primaryColor }}
              >
                Name
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: secondaryColor }}
              >
                {nft.name}
              </span>
            </p>
            <p className="mb-3">
              <span
                className="block font-bold text-3xl"
                style={{ color: primaryColor }}
              >
                Token
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: secondaryColor }}
              >
                {nft.identifier}
              </span>
            </p>
            <p className="mb-3 truncate">
              <span
                className="block font-bold text-3xl"
                style={{ color: primaryColor }}
              >
                Owner
              </span>
              <a
                target={"_blank"}
                rel="noreferrer"
                href={nft.url}
                className="text-lg font-bold block truncate"
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
              <span
                className="block font-bold text-3xl"
                style={{ color: primaryColor }}
              >
                Collection
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: secondaryColor }}
              >
                {nft.collection}
              </span>
            </p>
            <div className="w-28 h-28 block md:hidden mx-auto">
              <img src={qrCodeUrl} alt="qr code" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NFTInfo.propTypes = {
  //
};

export default NFTInfo;
