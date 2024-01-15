import React from "react";
import { NavLink } from 'react-router-dom';

const Chat = () => {
  return (
    <div className="main-column">
      <div class="logo">
          <NavLink to={"/"}><img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/></NavLink>
          {/* <br/><p>Welcome to v1 of the Hellscape Digital chat!<br/>Shitposting encouraged, but be respectful of others.</p> */}
        
      </div>
      <div class="chat-main-column">
        <iframe
          src="https://xat.com/embed/chat.php#id=220522559&gn=HellscapeDigital"
          className="chat-iframe-container"
          title="Chat"
          seamless="seamless"
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
