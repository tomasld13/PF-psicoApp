import React, { useContext } from 'react';
import { ChatSelect } from '../Components/ChatComponents/ChatSelect';
import { InboxPeople } from '../Components/ChatComponents/InboxPeople';
import { Messages } from '../Components/ChatComponents/Messages';
import { ChatContext } from '../context/chatContext/chatContext';


import '../css/chat.css';

export const ChatPage = () => {

    const { chatState } = useContext( ChatContext );

    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {
                    ( chatState.chatActivo )
                        ? <Messages />
                        : <ChatSelect />
                }
                

            </div>


        </div>
    )
}
