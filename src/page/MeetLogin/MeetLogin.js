import React, { useState, useEffect } from 'react'
import './MeetLogin.css'
import { useDispatch } from 'react-redux';
import io from 'socket.io-client'
import { SocketConnectedActions } from '../../redux/actions/socketIoActions';
import { useNavigate } from "react-router-dom";

export default function MeetLogin() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [roomId, setRoomId] = useState('');

    const onClick = () => {
        const newSocket = io.connect(
            'http://' + window.location.hostname + ':3001/webrtcPeer',
            {
                path: '/io/webrtc',
                query: {
                    room: `/${roomId}`,
                }
            }
        )
        dispatch(SocketConnectedActions(newSocket))
        navigate(`/meet`);
    }

    return (
        <div className="enter-room-container">
            <form>
                <input
                    type="text"
                    value={roomId}
                    placeholder="Room id"
                    onChange={(event) => {
                        setRoomId(event.target.value)
                    }} />
                <button onClick={() => onClick()}>Enter</button>
            </form>
        </div>
    )
}
