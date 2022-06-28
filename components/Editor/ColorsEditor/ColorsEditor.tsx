import PropTypes from "prop-types";
import React from "react";
import { useEditor } from "../../../hooks/useEditor";

type ColorsEditorProps = {
  //
};

const ColorsEditor: React.FC<ColorsEditorProps> = () => {
  const {
    backgroundColor,
    setBackgroundColor,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    qrColor,
    setQrColor,
    qrBgColor,
    setQrBgColor,
  } = useEditor();

  return (
    <div className="flex flex-wrap gap-y-2 gap-x-6">
      <div>
        <label className="block">Background color</label>
        <input
          type={"color"}
          className="rounded"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Primary color</label>
        <input
          type={"color"}
          className="rounded"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </div>
      <div>
        <label className="block">Secondary color</label>
        <input
          type={"color"}
          className="rounded"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
      </div>
      <div>
        <label className="block">QR Code Background color</label>
        <input
          type={"color"}
          className="rounded"
          value={qrBgColor}
          onChange={(e) => setQrBgColor(e.target.value)}
        />
      </div>
      <div>
        <label className="block">QR Code color</label>
        <input
          type={"color"}
          className="rounded"
          value={qrColor}
          onChange={(e) => setQrColor(e.target.value)}
        />
      </div>
    </div>
  );
};

ColorsEditor.propTypes = {
  //
};

export default ColorsEditor;
