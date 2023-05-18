import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../page/ProductList/ProductList";


const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ProductList/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;