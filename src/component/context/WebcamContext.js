import React, { createContext, useState } from "react";

export const WebcamContext = createContext();
export const WebcamProvider = ({ children }) => {
    const [displayCam, setDisplayCam] = useState('block');

    return (
        <WebcamContext.Provider 
        value={{displayCam, setDisplayCam}}
        >
            {children}
        </WebcamContext.Provider>
    )
}