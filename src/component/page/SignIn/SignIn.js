import React, { useState } from "react";
import googleLoginImg from '../../../img/btn_google_signin_light_normal_web@2x.png'
import { useNavigate } from "react-router";
import ApiService from "../../../ApiService";
import { Container, Paper } from './Signin.style';

const SignIn = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleId = (e) => {
        setUserId(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (userId && password) {
            ApiService.signin({ username: userId, password: password});
        } else {
            alert('입력되지 않은 필드가 있습니다.');
        }
    };

    return (
        <Container>
            <Paper>
                <h1>로그인</h1>
                <input 
                    type="text" 
                    value={userId} 
                    onChange={handleId}
                    name="id"
                    placeholder="ID"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={handlePassword}
                    name="password"
                    placeholder="Password"
                />
                <button onClick={handleLogin}>로그인</button>
                <a href="/signup">회원가입</a>
            </Paper>
        </Container>
    );
};


export default SignIn;