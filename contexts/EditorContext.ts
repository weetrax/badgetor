import React from "react";

type EditorContextType = {
    backgroundColor: string;
    setBackgroundColor: (backgroundColor: string) => void;
    primaryColor: string;
    setPrimaryColor: (primaryColor: string) => void;
    secondaryColor: string;
    setSecondaryColor: (secondaryColor: string) => void;
}

export const EditorContext = React.createContext<EditorContextType>({
    backgroundColor: "#161721",
    setBackgroundColor: () => { },
    primaryColor: "#ed143d",
    setPrimaryColor: () => { },
    secondaryColor: "#ffffff",
    setSecondaryColor: () => { },
})