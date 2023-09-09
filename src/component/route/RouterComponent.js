import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../page/MainPage/MainPage";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";


const AppRouter = () => {
    

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Navigate replace to="/signin"/>}/>
                    <Route exact path="/main" element={<MainPage/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;