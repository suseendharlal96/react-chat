import React from "react";
import { ChatEngine } from "react-chat-engine";

import Chat from "./components/Chat";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="a2c86bd2-f9c1-490b-b05c-8d830ae9f553"
      userName="susee"
      userSecret="susee1"
      renderChatFeed={(chatAppProps) => <Chat {...chatAppProps} />}
    />
  );
};

export default App;
