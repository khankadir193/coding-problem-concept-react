import React, { useEffect } from 'react';

const throttling = (func,delay)=>{
    let lastCall = 0;
    return (...args)=>{
        let now = new Date().getTime();
        if(now-lastCall >= delay){
            lastCall = now;
            func(...args);
        }
    }
}

const ThrottlingComp = () => {

    const handleScroll = throttling(()=>{
        console.log('Scrolling.....');
    },1000);

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);

  return (
    <div style={{height:'2000px'}}>
        Scroll Down
    </div>
  );
}

export default ThrottlingComp;