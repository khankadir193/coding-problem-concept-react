import React, { useEffect, useState } from 'react'

const CountDown = () => {
    // const [days,setDays] = useState('');
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [hours, setHours] = useState('00');

    const btnStyle = {
        width: '20%',
        background: 'black',
        color: 'white',
        outline: 'none',
        height: '5vh',
        borderRadius: '3vw',
        // padding:'1vw'
        fontSize: '1vw',
        fontStyle: 'italic',
        position: 'absolute',
        zIndex: '1000'
    }

    useEffect(() => {

        console.log('hi.....');

        const interval = setInterval(() => {
            let hour = hours;
            let min = minutes;
            let sec = `0${Number(seconds)}` + 1;

            sec = sec < 10 ? `0${sec}` : `${sec}`;
            if(sec === 60){
                sec = '00';
                min = Number(minutes) + 1 
                min = min < 10 ? `0${min}` : min;
                if(min === 60){
                    min = '00';
                    hour = Number(hours) + 1;
                    hour = hour < 10 ? `0${hour}` : hour;
                }
            }
            setSeconds(sec);
            setMinutes(min);
            setHours(hour);
        },10);


        return ()=>{
            clearInterval(interval);
        }
    }, [hours,minutes,seconds]);

    const handleTimer = (event) => {
        console.log('eventValue...', event);
    };

    return (
        <div>
            <h2>{`${hours}:${minutes}:${seconds}`}</h2>
            <button style={btnStyle} onClick={handleTimer}>TimerStart</button>
        </div>
    )
};

export default CountDown;