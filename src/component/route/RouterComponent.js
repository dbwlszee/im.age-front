import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../page/ProductList/ProductList";
// import SalesStatusCam from "../page/SalesStatusCam";
import WebcamStatus from "../page/ProductList/WebcamStatus";


const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProductList/>}/>
                    <Route path="/sales-status" element={<WebcamStatus displaycam='block'/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;