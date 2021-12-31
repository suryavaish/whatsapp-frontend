import React from 'react'
import { Avatar } from '@material-ui/core';
import './sidebarChat.css'
function sidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is a last message</p>
            </div>
        </div>
    )
}

export default sidebarChat
