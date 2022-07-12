import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { ChatContext } from '../../context/chatContext/chatContext';

import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div 
                id="mensajes"
                className="msg_history"
            >

                {
                    chatState.mensajes.map( msg => (
                        ( msg.para === auth.id)
                            ? <IncomingMessage key={ msg.id } msg={ msg } />
                            : <OutgoingMessage key={ msg.id } msg={ msg } />
                    ))
                }

                

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
    )
}
