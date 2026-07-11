import "./wordList.css";
import { useRef, useEffect } from "react";

function WordList({ words }) {
  const listRef = useRef(null);
  useEffect(() => {
    if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [words]);
  return (
    <div className="word-list">
      <h2>Palabras</h2>

      <ul ref={listRef}>
        {words.map((word) => (
            <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;