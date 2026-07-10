import Header from "../components/header/header";
import Timer from "../components/timer/timer";
import Score from "../components/scoreDisplay/scoreDisplay";
import WordInput from "../components/wordInput/wordInput";
import Message from "../components/message/message";
import WordList from "../components/wordList/wordList";
import GameOver from "../components/gameOver/gameOver";
import { useGame } from "../hooks/useGame";

function Game() {
    const { words, score, time, message, gameOver, addWord } = useGame();
    return (
        <main>
            <Header />
            <Timer time={time} />
            <Score score={score} />
            {
                !gameOver
                ? <WordInput onSubmit={addWord}/>
                : <GameOver
                    score={score}
                    wordCount={words.length}
                />
            }
            <Message message={message} />
            <WordList words={words} />
        </main>
    );
}

export default Game;