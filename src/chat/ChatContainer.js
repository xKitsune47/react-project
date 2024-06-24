// import "./chatBubble/ChatBubble";
import "./ChatContainer.css";

const players = [
    {
        pName: "Nomadiction",
        pWord: "familiar",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
        pName: "RowanTree",
        pWord: "entertain",
        question: "Aliquam tristique pharetra rutrum?",
    },
    {
        pName: "Ultralex",
        pWord: "archive",
        question: "Cras bibendum urna et diam interdum vulputate?",
    },
    {
        pName: "Scupperly",
        pWord: "range",
        question: "Fusce bibendum dapibus sapien ut blandit?",
    },
    {
        pName: "Twilight",
        pWord: "bacon",
        question: "Fusce bibendum dapibus sapien ut blandit?",
    },
    {
        pName: "Wolfbane",
        pWord: "allowance",
        question: "Fusce bibendum dapibus sapien ut blandit?",
    },
    {
        pName: "Bluetail",
        pWord: "single",
        question: "Fusce bibendum dapibus sapien ut blandit?",
    },
    {
        pName: "Cinder",
        pWord: "pan",
        question: "Donec ac nisi non nisi dapibus molestie quis at tellus?",
    },
];

export default function ChatContainer() {
    return (
        <div className="chat__container">
            {players.map((player) => (
                <ChatBubble player={player} />
            ))}
        </div>
    );
}

function ChatBubble(props) {
    const player = props.player;
    return (
        <p className="chat--chat__bubble">
            <span className="chat--chat__bubble--name">{player.pName}</span>{" "}
            <br />
            <span className="chat--chat__bubble--question">
                {player.question}
            </span>
            <span className="chat--chat__bubble--votes">
                <span className="chat--chat__bubble--vote chat--chat__bubble--yea">
                    3
                </span>
                <span className="chat--chat__bubble--vote chat--chat__bubble--nay">
                    5
                </span>
            </span>
        </p>
    );
}

setTimeout(function () {
    const chat = document.querySelector(".chat__container");
    chat.scrollTop = chat.scrollHeight;
}, 500);
