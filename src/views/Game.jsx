import Header from "../components/header/header";
import Timer from "../components/timer/timer";
import Score from "../components/scoreDisplay/scoreDisplay";
import WordInput from "../components/wordInput/wordInput";
import Message from "../components/message/message";
import WordList from "../components/wordList/wordList";
import GameOver from "../components/gameOver/gameOver";
import Leaderboard from "../components/leaderboard/leaderboard";
import { getLeaderboard } from "../services/leaderboardService";
import { useGame } from "../hooks/useGame";

function Game() {
    const { words, score, time, message, gameOver, leaderboard, addWord, restartGame } = useGame();
    return (
        <main>
            <Header />
            {!gameOver && <Timer time={time} />}
            {!gameOver && <Score score={score} />}
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
                            onRestart={restartGame}
                        />
                    </>
                )
            }
        </main>
    );
}

export default Game;