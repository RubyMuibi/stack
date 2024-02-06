import styles from "./chat.module.css";

import { useState, useEffect } from "react";

import axios from "axios";
import { Icon } from "@iconify/react";

export default function Chat() {
  const [userMessage, setUserMessage] = useState("");
  const [aiMessage, setAiMessage] = useState(null);

  const getPrevChats = () => {
    const storedChatHistory = localStorage.getItem("chatHistory");
    return storedChatHistory ? JSON.parse(storedChatHistory) : [];
  };

  const [chatHistory, setChatHistory] = useState(getPrevChats);

  const getUserMessage = (event) => {
    setUserMessage(event.target.value);
  };

  const handleFetchMessage = async () => {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const apiURL = `${serverURL}/chat`;
    const requestData = { userMessage: userMessage };

    const response = await axios.post(apiURL, requestData);
    const responseData = await response.data;
    const aiResponse = await responseData.choices[0].message.content;
    setAiMessage(aiResponse);

    setChatHistory((prev) => {
      const newChatHistory = [
        ...prev,
        { role: "user", content: userMessage },
        { role: "ai", content: aiResponse },
      ];

      localStorage.setItem("chatHistory", JSON.stringify(newChatHistory));
      return newChatHistory;
    });

    setUserMessage("");
  };

  const addNewChat = () => {
    setChatHistory([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <>
      <main className={styles.container}>
        <ul className={styles.chatHistoryContainer}>
          {chatHistory.map((x) => {
            return (
              <>
                <li className={styles.contentContainer}>
                  {x.role === "user" ? (
                    <Icon
                      icon="radix-icons:person"
                      color="white"
                      width="20"
                      className={styles.userIcon}
                    />
                  ) : (
                    <Icon
                      icon="arcticons:openai-chatgpt"
                      color="black"
                      width="20"
                      className={styles.aiIcon}
                    />
                  )}
                  <p>{x.content}</p>
                </li>
              </>
            );
          })}
        </ul>

        <section className={styles.messageContainer}>
          <div className={styles.inputContainer}>
            <Icon
              icon="mdi:plus"
              color="grey"
              width="20"
              className={styles.newChatIcon}
              onClick={addNewChat}
            />
            <textarea
              placeholder="Hi, I am Mojito, you can ask me anything..."
              onChange={getUserMessage}
              value={userMessage}
            ></textarea>
            <Icon
              icon="tabler:send"
              color="grey"
              width="20"
              className={styles.sendIcon}
              onClick={handleFetchMessage}
            />
          </div>
          <p> Built by Ruby Muibi</p>
        </section>
      </main>
    </>
  );
}
