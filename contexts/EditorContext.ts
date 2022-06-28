import React from "react";

type EditorContextType = {
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  primaryColor: string;
  setPrimaryColor: (primaryColor: string) => void;
  secondaryColor: string;
  setSecondaryColor: (secondaryColor: string) => void;
  qrBgColor: string;
  setQrBgColor: (qrBgColor: string) => void;
  qrColor: string;
  setQrColor: (qrColor: string) => void;
};

export const EditorContext = React.createContext<EditorContextType>({
  backgroundColor: "#161721",
  setBackgroundColor: () => {},
  primaryColor: "#fca311",
  setPrimaryColor: () => {},
  secondaryColor: "#ffffff",
  setSecondaryColor: () => {},
  qrBgColor: "#ffffff",
  setQrBgColor: () => {},
  qrColor: "#000000",
  setQrColor: () => {},
});
