import { useState, useRef, useEffect } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0); // time in milliseconds
    const intervalRef = useRef(null);

    const start = () => {
        if (intervalRef.current) return; // prevent multiple intervals

        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 10);
        }, 10);
    };

    const pause = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const reset = () => {
        pause();
        setTime(0);
    };

    // Cleanup on unmount (VERY IMPORTANT)
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    console.log(intervalRef.current, 'intervalRef.current')

    const formatTime = () => {
        const ms = Math.floor((time % 1000) / 10);
        const sec = Math.floor((time / 1000) % 60);
        const min = Math.floor((time / 60000) % 60);

        return `${min}:${sec.toString().padStart(2, "0")}:${ms
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div>
            <h2>{formatTime()}</h2>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch;
