import Header from "../components/header/header";
import Timer from "../components/timer/timer";
import Score from "../components/scoreDisplay/scoreDisplay";
import WordInput from "../components/wordInput/wordInput";
import Message from "../components/message/message";
import WordList from "../components/wordList/wordList";
import GameOver from "../components/gameOver/gameOver";
import { useGame } from "../hooks/useGame";
import "./Game.css";

function Game() {
    const { words, score, time, message, gameOver, leaderboard, addWord, restartGame } = useGame();
    return (
        <main>
            <Header />
                <div className="game-info">
                    {!gameOver && <Timer time={time} />}
                    {!gameOver && <Score score={score} />}
                </div>
            {
                !gameOver ? (
                    <>
                        <WordInput onSubmit={addWord} />
                        <Message message={message} />
                        <WordList words={words} />
                    </>
                ) : (
                    <>
                        <GameOver
                            score={score}
                            wordCount={words.length}
                            leaderboard={leaderboard}
                            onRestart={restartGame}
                        />
                    </>
                )
            }
        </main>
    );
}

export default Game;