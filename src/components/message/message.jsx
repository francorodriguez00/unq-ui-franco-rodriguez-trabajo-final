import "./message.css";

function Message({ message }) {
    if (!message.text) return null;
    return (
        <p className={message.type}>
            {message.text}
        </p>
    );
}

export default Message;