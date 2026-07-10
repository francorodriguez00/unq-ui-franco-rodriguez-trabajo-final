import "./wordList.css";

function WordList({ words }) {
  return (
    <div>
      <h2>Palabras</h2>

      <ul>
        {words.map((word, index) => (
            <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;