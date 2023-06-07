import React, { useEffect, useRef } from "react";
import io from 'socket.io-client';
import Webcam from "react-webcam";


const WebcamStatus = (props) => {
    const socketRef = useRef();
    const webcamRef = useRef(null);

    useEffect(()=>{
        // 웹소켓 서버 연결
        socketRef.current = io.connect('http://localhost:5000');

        
        const interval = setInterval(() => {
            // 현재 프레임 가져오기
            const currentFrame = webcamRef.current.getScreenshot();
            
            // currentFrame이 존재할 때 플라스크로 이미지 전송
            if(currentFrame) {
                socketRef.current.emit('webcam_data', { image: currentFrame.substr(23,) });
            }
            
        }, 1000); // 1초마다 현재 프레임 전송

        // 컴포넌트 언마운트 됐을 때 웹소켓 연결 종료
        return() => {
            clearInterval(interval);
            socketRef.current.disconnect();
        };
    }, []);


    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{display: props.displaycam}}
            />
        </>
    )
}

export default WebcamStatus;