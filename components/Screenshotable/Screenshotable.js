import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import { useScreenshot, createFileName } from "use-react-screenshot";
import * as htmlToImage from "html-to-image";

const Screenshot = ({ children }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const [image] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });
  const ref = createRef(null);

  const download = (image, { name = "nft-badge", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    setIsDownloading(true);
    takeScreenShot(ref.current)
      .then(download)
      .finally(() => {
        setIsDownloading(false);
      });
  };

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  return (
    <div>
      <div className="text-right mb-4">
        <button
          onClick={downloadScreenshot}
          className="px-2 py-1 rounded bg-primary-500 disabled:bg-primary-300"
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download as .png"}
        </button>
      </div>
      <div ref={ref}>{children}</div>
    </div>
  );
};

Screenshot.propTypes = {
  //
};

export default Screenshot;
