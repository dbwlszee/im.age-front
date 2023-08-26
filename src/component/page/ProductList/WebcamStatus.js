import React, { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import Webcam from "react-webcam";
// import { useContext } from "react";
// import { WebcamContext } from "../../context/WebcamContext";
import ApiService from "../../../ApiService";


const WebcamStatus = ({ onDataChange }) => {
    const socketRef = useRef();
    const webcamRef = useRef(null);
    const [tempProduct, setTempProduct] = useState(null);
    // const [imgUrl, setimgUrl] = useState();
    // const { displayCam, setDisplayCam } = useContext(WebcamContext);

    // Lifting State Up을 위함.
    const sendData = () => {
        onDataChange(tempProduct);
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
                    socket.emit('webcam_data', { image: currentFrame.substr(23,) });
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
            clearInterval(interval);
            socketRef.current.disconnect();
        };
    }, []);

    // tempProduct 상태 변경 시 sendData 호출
    useEffect(() => {
        sendData(); 
    }, [tempProduct]);


    return (
        <div>
            <Webcam
                audio={false}
                height={1080}
                width={1920}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{display: "block"}}
            />
        </div>
    )
}

export default WebcamStatus;