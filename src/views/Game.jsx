import Header from "../components/header/header";
import Timer from "../components/timer/timer";
import Score from "../components/scoreDisplay/scoreDisplay";
import WordInput from "../components/wordInput/wordInput";
import Message from "../components/message/message";
import WordList from "../components/wordList/wordList";

function Game() {
  return (
    <main>
      <Header />
      <Timer />
      <Score />
      <WordInput />
      <Message />
      <WordList />
    </main>
  );
}

export default Game;