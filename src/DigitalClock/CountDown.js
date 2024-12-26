import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [days,setDays] = useState('');
    const [seconds,setSeconds] = useState('');
    const [minutes,setMinutes] = useState('');
    const [hours,setHours] = useState('');

    const btnStyle = {
        width:'20%',
        background:'black',
        color:'white',
        outline:'none',
        height:'5vh',
        borderRadius:'3vw',
        // padding:'1vw'
        fontSize:'1vw',
        fontStyle:'italic',
        position:'absolute',
        zIndex:'1000'
    }

    useEffect(()=>{
        let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
    },[]);

    const handleTimer = (event) => {
        console.log('eventValue...',event);
    };

    return (
        <div>
           <h2>{`${days}:${hours}:${minutes}:${seconds}`}</h2>
            <button style={btnStyle} onClick={handleTimer}>TimerStart</button>
        </div>
    )
};

export default CountDown;