import React, { useState } from "react";
import { setId, setToken } from "../../../auth/Auth";
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
            const userDTO = { username: userId, password: password};

            try {
                // 서버에 로그인 정보 전송
                const res = await ApiService.call('/auth/signin', 'POST', userDTO);
                
                // 성공 시 token, id설정 후 메인페이지로 이동
                setToken(res.token);
                setId(res.id);
                navigate('/main');
            } catch (err) {
                console.log(err);
                alert('유효하지 않은 로그인 정보입니다.');
            }
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
                <a href="/signup">아직 계정이 없습니까? 회원가입하세요.</a>
            </Paper>
        </Container>
    );
};


export default SignIn;