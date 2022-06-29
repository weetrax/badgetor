import React, { createRef, useState } from "react";
import * as htmlToImage from "html-to-image";

const Screenshot = ({ children }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const ref = createRef(null);

  const downloadScreenshot = () => {
    setIsDownloading(true);
    htmlToImage
      .toPng(ref.current)
      .then((dataUrl) => {
        saveAs(dataUrl, "badge-info.png");
      })
      .finally(() => {
        setIsDownloading(false);
      });
  };

  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style = "display:none;";
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
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
