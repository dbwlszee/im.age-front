import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SalesStatusCam from "../page/SalesStatusCam";
import WebcamStatus from "../page/ProductList/WebcamStatus";
import ProductComponent from "../page/ProductList/ProductComponent";


const AppRouter = () => {
    const [productData, setProductData] = useState();
    
    //WebcamStatus에서 데이터를 받아와서 ProductComponent로 전달
    const handleDataChange = (newData) => {
        setProductData(newData);
    };

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProductComponent productData={productData}/>}/>
                </Routes>
            </BrowserRouter>
            <WebcamStatus onDataChange={handleDataChange}/>
        </>
    );
}

export default AppRouter;