import React, { useEffect } from 'react'

const btnDesign = {
    width: '10%',
    height: '3.5vh',
    background: 'green',
    color: 'white',
    fontSize: '1rem',
    textTransform: 'capitalize'
}

function Button(props) {

    // const handleClick = () => {
    //     console.log('button is triggerring...............');
    // }

    useEffect(()=>{
        console.log('pros..',props);
    },[])

    return (
        <input type='button' value={props.label} style={btnDesign} onClick={props.handleClick} />
    )
}

export default Button
// onClick={handleClick}