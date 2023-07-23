import React, { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import Webcam from "react-webcam";
import Peer from 'peerjs';
// import { useContext } from "react";
// import { WebcamContext } from "../../context/WebcamContext";
import ApiService from "../../../ApiService";


const WebcamStatus = ({ onDataChange }) => {
    const socketRef = useRef();
    const webcamRef = useRef(null);
    const peerRef = useRef(null);
    const [tempProduct, setTempProduct] = useState(null);
    // const [imgUrl, setimgUrl] = useState();
    // const { displayCam, setDisplayCam } = useContext(WebcamContext);

    // Lifting State Up을 위함.
    const sendData = () => {
        onDataChange(tempProduct);
    };

    useEffect(()=>{
        // 웹소켓 서버 연결
        socketRef.current = io.connect('http://localhost:5000');
        const peer = new Peer();

        peerRef.current = peer;

        // PeerJS 서버에 연결되었을 때 실행
        peer.on('open', (id) => {
            console.log('Connected with ID:', id);
        });
        
        const interval = setInterval(() => {
            // 현재 프레임 가져오기
            const currentFrame = webcamRef.current.getScreenshot();

            // currentFrame이 존재할 때 플라스크로 이미지 전송
            if(currentFrame) {
                socketRef.current.emit('webcam_data', { image: currentFrame.substr(23,) });
            }
        }, 1000); // 1초마다 현재 프레임 전송


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
            peerRef.current.destroy();
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