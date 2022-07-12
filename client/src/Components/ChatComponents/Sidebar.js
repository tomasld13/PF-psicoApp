import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext/AuthContext';
import { ChatContext } from '../../context/chatContext/chatContext';

import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );
    //const {auth} = useSelecto(autenticado...)
    const { id} = auth;

    return (
        <div className="inbox_chat">

            {
                chatState.usuarios
                    .filter( user => user.id!== id)
                    .map( (usuario) => (
                    <SidebarChatItem 
                        key={ usuario.id}
                        usuario={ usuario }
                    />
                ))
            }


            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>

    )
}
