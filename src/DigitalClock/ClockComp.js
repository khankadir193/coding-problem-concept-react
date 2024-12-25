import React, { useEffect, useState } from 'react';

const ClockComp = () => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        };

        const timer = () => {
            const currentTime = new Date();
            const hours = formatTime(currentTime.getHours() % 12 || 12);
            const minutes = formatTime(currentTime.getMinutes());
            const seconds = formatTime(currentTime.getSeconds());

            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            console.log('hours:-', hours, 'minutes:-', minutes, 'seconds:-', seconds);
        };

        // timer();

        const intervalId = setInterval(timer, 1000);



        return () => {
            console.log('function cleanuped...');
            clearInterval(intervalId);
        };
    }, [hours, minutes, seconds]);

    const timerStyle = {
        fontSize: '3vw',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        // width:'20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };



    return (
        <div style={{ width: '100%' }}>
            <h2>Digital Clock</h2>
            <p style={timerStyle}>{`${hours}:${minutes}:${seconds}`}</p>
        </div>
    );
};

export default ClockComp