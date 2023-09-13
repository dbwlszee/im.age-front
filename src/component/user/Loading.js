import React from 'react';
import styled from 'styled-components';
import Spinner from '../../img/spinner.gif';


const Background = styled.div`
    height: calc(100vh - 55px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 44px;
        margin-bottom: 12px;
    }

    p{
        color: #8cae89;
    }
`;

const Loading = () => {
    return(
        <Background>
            <img src={Spinner} alt='Loading'/>
            <p>잠시만 기다려 주세요.</p>
        </Background>
    )
}

export default Loading;