import React, { useEffect, useState } from 'react'

const stopWatch = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    background: "black",
    flexDirection: "column"
}

const btnStartSize = {
    width: "10%",
    height: "5vh",
    background: "cadetblue",
    color: "white",
    fontSize: "x-large"
}

const btnStopSize = {
    width: "10%",
    height: "5vh",
    background: "red",
    color: "white",
    fontSize: "x-large"
}

const textSize = {
    color: "white",
    fontSize: "5rem"
}

let seconds = '00', minutes = '00', hours = '00';

function TimerWatch() {
    const [isBtnChange, setIsBtnChange] = useState(false);
    const [sec, setSec] = useState("00");
    const [min, setMin] = useState("00");
    const [hour, setHour] = useState("00");

    useEffect(() => {
        if (isBtnChange) {
            const interval = setInterval(() => {
                if (sec == 60) {
                    setSec('00');
                    setMin((prev) => Number(prev) + 1);
                } else if (min == 60) {
                    setHour((prev) => Number(prev) + 1);
                    setMin('00');
                } else {
                    setSec((prev) => Number(prev) + 1);
                }
            }, 100);

            return () => {
                clearInterval(interval);
            }
        }
    }, [sec, isBtnChange, min])

    const handleButton = (event) => {
        if (!isBtnChange) {
            setIsBtnChange(true);
        } else {
            setIsBtnChange(false);
        }
        if (Number(sec) === Number(seconds)) {
            setSec(Number(seconds) + 1);
        }
    }

    return (
        <div style={stopWatch}>
            <h1 style={textSize}>{`${hour} : ${min} : ${sec}`}</h1>
            <button type='button' style={isBtnChange ? btnStopSize : btnStartSize} onClick={handleButton}>{isBtnChange ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default TimerWatch