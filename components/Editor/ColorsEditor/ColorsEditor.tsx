import * as React from "react";
import PropTypes from "prop-types";
import { useEditor } from "../../../hooks/useEditor";

type ColorsEditorProps = {
  //
};

const ColorsEditor: React.FC<ColorsEditorProps> = () => {

  const { backgroundColor, setBackgroundColor, primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useEditor()

  return <div className="flex flex-wrap gap-y-2 gap-x-6">
    <div>
      <label className="block">Background color</label>
      <input type={"color"} className="rounded" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
    </div>
    <div>
      <label className="block">Primary color</label>
      <input type={"color"} className="rounded" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
    </div>
    <div>
      <label className="block">Secondary color</label>
      <input type={"color"} className="rounded" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
    </div>
  </div>;
};

ColorsEditor.propTypes = {
  //
};

export default ColorsEditor;
