import { EditorContext } from "../contexts/EditorContext";
import { useState } from "react";

type EditorProviderProps = {
  children: React.ReactNode;
};

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#161721");
  const [primaryColor, setPrimaryColor] = useState<string>("#fca311");
  const [secondaryColor, setSecondaryColor] = useState<string>("#ffffff");

  const [qrBgColor, setQrBgColor] = useState<string>("#ffffff");
  const [qrColor, setQrColor] = useState<string>("#000000");

  return (
    <EditorContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        qrBgColor,
        setQrBgColor,
        qrColor,
        setQrColor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
