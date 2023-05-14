import React from "react";
import styled from "styled-components";
import { ReactComponent as LoginSvg } from './login1.svg';


// style
const Navbar = styled.nav`
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
    li:Nth-child(5){
        padding: 8px 10px 8px 50px;
    }

    li{
        padding: 8px 25px; 
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

    return(
        <>
            <Navbar>
                <Home href="/">IM.AGE</Home>
                <Menu>
                    <li><a href="/sales-status">판매 현황</a></li>
                    <li><a href="/stock">재고 확인</a></li>
                    <li><a href="/add">상품 추가</a></li>
                    <li><a href="/settings">설정</a></li>
                    <li><a href="/login">로그인</a></li>
                    <Login href="/login"><LoginSvg/></Login>
                </Menu>
            </Navbar>
        </>
    )
}

export default Nav;