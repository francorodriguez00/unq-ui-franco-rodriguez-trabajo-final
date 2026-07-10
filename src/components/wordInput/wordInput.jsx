import "./wordInput.css";
import { useState } from "react";

function WordInput({ onSubmit }) {
  const [word, setWord] = useState("");
  const handleSubmit = () => {
    onSubmit(word);
    setWord("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Ingresá una palabra"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
}

export default WordInput;