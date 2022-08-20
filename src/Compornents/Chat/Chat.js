import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';

const userName = nanoid(5);
const socket = io.connect("http://localhost:5000");

const Chat = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sentChat = (e) => {
        e.preventDefault();
        socket.emit("chat", { message, userName });
        setMessage("");
    };

    useEffect(() => {
        socket.on('chat', (payload) => {
            setChat([...chat, payload]);
        });
    });

    return (
        <div>

            
            <h1 className='my-20 text-center font-bold text-4xl'>COMMINUCATIONS YOUR FRINDS</h1>

            {chat.map((payload, index) => {
                return <p key={index}>{payload.message} <span>id: {payload.userName}</span></p>;
                
            })}

            <form onSubmit={sentChat} className='text-center'>

                <input
                    type="text"
                    placeholder="Type here"
                    name="chat"
                    value={message}
                    class="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <button type='submit' class="btn btn-outline btn-accent">sent</button>

            </form>
        </div>

    );
};

export default Chat;