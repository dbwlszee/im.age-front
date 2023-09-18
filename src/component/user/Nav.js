import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as LoginSvg } from '../../img/login1.svg';
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

// style
const Navbar = styled.nav`
    z-index: 10;
    top: 0%;
    position: sticky;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(249, 249, 249);
    padding: 0px 12px; 
`;
const Home = styled.a`
    padding-left: 20px;
    font-size: 24px;
    font-weight: 400;
    color: #75A970;
`;
const Menu = styled.ul`
    font-size: 14px;
    display: flex;
    margin: 0;
    padding-left: 0;

    li{
        padding: 8px 10px; 
    }
    a{
        color: #8B8B8B;
    }

`;

const Login = styled.a`
    padding: 0 20px 0 0;
`;


// Nav Component
const Nav = () => {
    const navigate = useNavigate();
    const { setOnSearch, onSearch } = useContext(SearchContext);

    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userId");
        navigate("/signin");
    }

    const handleSearchChange = () => {
        setOnSearch(false);
    };

    // useEffect(()=>{
    //     console.log(onSearch);
    // }, [onSearch]);


    return(
        <>
            <Navbar>
                <Home href="/main" onClick={handleSearchChange}>IM.AGE</Home>
                <SearchBox/>
                <Menu>
                    <li><a href="/signin" onClick={handleLogout}>로그아웃</a></li>
                    <Login href="/signin" onClick={handleLogout}><LoginSvg/></Login>
                </Menu>
            </Navbar>
        </>
    )
}

export default Nav;