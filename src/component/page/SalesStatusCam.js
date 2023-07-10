import React from "react";
import { useContext, useEffect } from "react";
import { WebcamContext } from "../context/WebcamContext";

const SalesStatusCam = () => {
    const { displayCam, setDisplayCam } = useContext(WebcamContext);
    useEffect(()=>{
        setDisplayCam('block');
        return() => {
            setDisplayCam('none');
        };
    },[setDisplayCam])

    return(
        <>
            Cam Status
        </>
    )
}

export default SalesStatusCam;