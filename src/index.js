import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./header/Header";
import PlayerList from "./playerList/PlayerList";
import Chat from "./chat/ChatContainer";
import Footer from "./footer/Footer";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Header />
        <PlayerList />
        <Chat />
        <Footer />
    </StrictMode>
);
