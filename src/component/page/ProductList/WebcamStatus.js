import React, { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import Webcam from "react-webcam";
import ApiService from "../../../ApiService";
import styled from "styled-components";

const WebcamComp = styled(Webcam)`
    position: absolute;
    top : 71.2vh;
    left: 6vw;
`;

const WebcamStatus = ({ onDataChange }) => {
    const socketRef = useRef();
    const webcamRef = useRef(null);
    const [tempProduct, setTempProduct] = useState(null);

    // Lifting State Up을 위함.
    const sendData = () => {
        onDataChange(tempProduct);
    };
    
    const initPeer = async () => {  
        try {
          // getUserMedia로 웹캠 스트림 가져오기
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          // 웹캠 스트림을 비디오 요소에 연결하여 웹캠 화면 표시
          webcamRef.current.srcObject = stream;
        } catch (error) {
          console.error('Error accessing the webcam:', error);
        }
    };


    useEffect(()=>{
            initPeer();

            // 소켓 연결 설정
            const socket = io('https://im-age.store');
            socketRef.current = socket;

            // 1초마다 현재 프레임을 서버로 전송
            const interval = setInterval(() => {
                // 현재 프레임 가져오기
                const currentFrame = webcamRef.current.getScreenshot();

                // currentFrame이 존재할 때 플라스크로 이미지 전송
                if (currentFrame) {
                    socket.emit('webcam_data', { image: currentFrame.substr(23,), userId: localStorage.getItem('userId') });
                }
            }, 1000);


            //flask에서 db가 업데이트 되었다는 소식을 받으면 상품리스트를 springboot에서 받아온다.
            socketRef.current.on('update', (data) => {
                ApiService.fetchProducts()
                .then( res => {
                    setTempProduct(res.data);
                })
                .catch(err => {
                    console.log('reloadRequest Error.', err);
                });
            });


            // 컴포넌트 언마운트 됐을 때 웹소켓 연결 종료
            return() => {
                if (socketRef.current) {
                    socketRef.current.disconnect();
                }
                clearInterval(interval);
            };
            
    }, []);

    // tempProduct 상태 변경 시 sendData 호출
    useEffect(() => {
        sendData(); 
    }, [tempProduct]);


    return (
        <div>
            <WebcamComp
                audio={false}
                height={150}
                width={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{display: "block"}}
            />
        </div>
    )
}

export default WebcamStatus;