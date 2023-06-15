import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hi there</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>ho there</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
