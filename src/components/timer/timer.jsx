import "./timer.css";

function Timer({ time }) {
    return (
        <div className="timer">
            ⏱ Tiempo: {time}s
        </div>
    ) 
}

export default Timer;