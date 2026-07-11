import "./wordInput.css";
import { useState } from "react";

function WordInput({ onSubmit }) {
    const [word, setWord] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(word);
        setWord("");
    };
    return (
        <form className="word-input" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingresá una palabra"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <button type="submit">
                Enviar
            </button>
        </form>
    );
}

export default WordInput;