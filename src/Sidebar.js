import React from 'react';
import './Sidebar.css'
import { DonutLarge, SearchOutlined } from '@material-ui/icons';
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './sidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                      <DonutLarge />
                    </IconButton>
                    <IconButton>
                      <ChatIcon />
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new Chat" type="text"/> 
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
