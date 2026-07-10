import "./wordList.css";

function WordList({ words }) {
  return (
    <div>
      <h2>Palabras</h2>

      <ul>
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;