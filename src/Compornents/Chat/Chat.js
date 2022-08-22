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


            <h1 className='my-5 text-center font-bold text-4xl'> COMMINUCATIONS YOUR FRINDS</h1>


            <div className='text-center relative '>
                <div class="mockup-phone">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            {chat.map((payload, index) => {
                                return <p key={index}>{payload.message} <span className='font-bold'>id: {payload.userName}</span></p>;

                            })}
                            <form onSubmit={sentChat} className='text-center bottom-0 fixed bottom-0 absolute mb-5 mt-2'>

                                <input
                                    type="text"
                                    placeholder="Type here"
                                    name="chat"
                                    value={message}
                                    className="input input-bordered  "
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                />
                                <button type='submit' className="btn btn-outline btn-accent ">sent</button>

                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Chat;