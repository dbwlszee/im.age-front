import React, { useState } from "react";
import ProductComponent from "../ProductList/ProductComponent";
import WebcamStatus from "../ProductList/WebcamStatus";
import Nav from "../../user/Nav"

import styled from "styled-components"

//style
styled(Nav)`
  position: absolute;
  left: 0px;
  top: 0px;
`;


const MainPage = () => {
    const [productData, setProductData] = useState();
    
    //WebcamStatus에서 데이터를 받아와서 ProductComponent로 전달
    const handleDataChange = (newData) => {
        setProductData(newData);
    };
    return(
        <>
            <Nav/>
            <ProductComponent productData={productData}/>
            <WebcamStatus onDataChange={handleDataChange}/>
        </>
    )
}

export default MainPage;