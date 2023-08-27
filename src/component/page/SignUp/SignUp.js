import React, { useState } from "react";
import { useNavigate } from "react-router";
import ApiService from "../../../ApiService";
import { Container, Paper } from '../SignIn/Signin.style';

const SignUp = () => {
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
            ApiService.signin({ username: userId, password: password });
        } else {
            alert('입력되지 않은 필드가 있습니다.');
        }
    };

    return (
        <Container>
            <Paper>
                <h1>회원가입</h1>
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
                <button onClick={handleLogin}>가입하기</button>
                <a href="/signin">이미 계정이 있습니까? 로그인하세요.</a>
            </Paper>
        </Container>
    );
};

export default SignUp;