import React, { createContext, useState } from "react";

export const WebcamContext = createContext();
export const WebcamProvider = ({ children }) => {
    const [displayCam, setDisplayCam] = useState('none');

    return (
        <WebcamContext.Provider 
        value={{displayCam, setDisplayCam}}
        >
            {children}
        </WebcamContext.Provider>
    )
}