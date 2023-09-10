import { useNavigate } from "react-router-dom"

export const setToken = (token)=>{
    localStorage.setItem('userToken', token);// make up your own token
}

export const setId = (userId) => {
    localStorage.setItem('userId', userId);
}

export const fetchToken = (token)=>{
    return localStorage.getItem('userToken');
}

export function RequireToken({children}){

    let auth = fetchToken();
    const navigate = useNavigate();

    if(!auth){
        navigate('/login');
    }

    return children;
}