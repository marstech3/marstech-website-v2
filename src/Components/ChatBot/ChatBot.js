import React, { useState } from "react";

import logo from "../../Assets/icons/chatbot/logo.png";
import settings from "../../Assets/icons/chatbot/settings.png";
import send from "../../Assets/icons/chatbot/send.svg";
import add from "../../Assets/icons/chatbot/add.svg";
import mail from "../../Assets/icons/chatbot/mail.svg";
import message from "../../Assets/icons/chatbot/message.svg";
import warning from "../../Assets/icons/chatbot/warning.svg";
import deleteImg from "../../Assets/icons/chatbot/delete.svg";

import "./ChatBot.scss";

const ChatBot = () => {
  const [chatWindowOpen, setChatWindowOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);

  const onChatClick = () => {
    console.log("clicked");
    setChatWindowOpen(true);
  };

  const onCloseClick = () => {
    setChatWindowOpen(false);
  };

  const sendMessage = (event) => {
    if (event.key === "Enter") {
      console.log("do validate");
    }
  };

  function textAreaAdjust(el) {
    el.style.height =
      el.scrollHeight > el.clientHeight ? el.scrollHeight + "px" : "60px";
  }

  const settingsClick = () => {
    setSettingsMenuOpen(!settingsMenuOpen);
  };

  return (
    <>
      {chatWindowOpen ? (
        <>
          <div className="chatWindow">
            <div className="header">
              <div className="heading">
                <img src={logo} width="24px" height="24px" alt="" />
                <span>Marstech</span>
              </div>
              <img
                src={settings}
                onClick={settingsClick}
                width="24px"
                height="24px"
                alt=""
              />
            </div>

            <div className="content">
              <div className="leftMessage">What can I do for you ?</div>
              <div className="rightMessage">Tell me about this company</div>
            </div>
            <div className="bottom">
              <div className="inputBox">
                <input
                  type="text"
                  id="message"
                  name="message"
                  cols="40"
                  rows="5"
                  placeholder="Write..."
                  //   onKeyDown={sendMessage}
                  //   onkeyup={textAreaAdjust(this)}
                ></input>

                <img src={send} width="24px" height="24px" alt="" />
              </div>
              <div className="footer">
                Powered by
                <a href="./"> marstech.ai</a>
              </div>
            </div>
          </div>
          {settingsMenuOpen && (
            <div
              className={`sidebar ${settingsMenuOpen === true ? "active" : ""}`}
            >
              <div className="sd-body">
                <ul>
                  <li>
                    <img src={add} width="24px" height="24px" alt="" />
                    <a href="./" className="sd-link">
                      New Chat
                    </a>
                  </li>
                  <li>
                    <img src={mail} width="24px" height="24px" alt="" />
                    <a href="./" className="sd-link">
                      Email Transcript
                    </a>
                  </li>
                  <li>
                    <img src={message} width="24px" height="24px" alt="" />
                    <a href="./" className="sd-link">
                      End chat
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src={deleteImg} width="24px" height="24px" alt="" />
                    <a href="./" className="sd-link">
                      Delete chat
                    </a>
                  </li>
                  <li>
                    <img src={warning} width="24px" height="24px" alt="" />
                    <a href="./" className="report">
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button className="close" onClick={onCloseClick}>
            X
          </button>
        </>
      ) : (
        <button className="chatButton" onClick={onChatClick}>
          Chat
        </button>
      )}
    </>
  );
};

export default ChatBot;
