import React, { useEffect, useState } from 'react'
import Button from './Button'
import OutputScreen from './OutputScreen'

function Calculator() {
    const [num, setNum] = useState(0);

    useEffect(() => {console.log('num is changed',num)}, [num]);

    const handleClick = (event) => {
        const enteredValue = event.target.value;
        console.log('num..', num);

        if (!isNaN(enteredValue) && !isNaN(num) ) {
            setNum((prev) => {
                if (prev || prev === 0) {
                    console.log('prev', prev, 'enteredValue', enteredValue)
                    return Number(prev.toString() + enteredValue).toString();
                }
                return enteredValue;
            });
        }else if(enteredValue !== '=' && enteredValue !== 'clear' && enteredValue !== 'Delete'){
            setNum((prev)=> prev+enteredValue); 
        }else if(enteredValue === '='){
            setNum(eval(num).toString());
        }else if(enteredValue === 'clear' || num.length === 1){
            setNum('0');
        }else if(enteredValue === 'Delete'){
            setNum(num.slice(0,num.length-1));
        }

    }


    return (
        <div>
            <h2 style={{ fontSize: 'x-large', background: 'black', color: 'white', width: '100%' }}>Simple Calculator</h2>
            <OutputScreen number={num}/>
            <div>
                <div>
                    <Button label="clear" handleClick={handleClick} />
                    <Button label="Delete" handleClick={handleClick} />
                    <Button label="." handleClick={handleClick} />
                    <Button label="/" handleClick={handleClick} />
                </div>
                <div>
                    <Button label="7" handleClick={handleClick} />
                    <Button label="8" handleClick={handleClick} />
                    <Button label="9" handleClick={handleClick} />
                    <Button label="*" handleClick={handleClick} />
                </div>
                <div>
                    <Button label="4" handleClick={handleClick} />
                    <Button label="5" handleClick={handleClick} />
                    <Button label="6" handleClick={handleClick} />
                    <Button label="-" handleClick={handleClick} />
                </div>
                <div>
                    <Button label="1" handleClick={handleClick} />
                    <Button label="2" handleClick={handleClick} />
                    <Button label="3" handleClick={handleClick} />
                    <Button label="+" handleClick={handleClick} />
                </div>
                <div>
                    <Button label="0" handleClick={handleClick} />
                    <Button label="=" handleClick={handleClick} />
                </div>
            </div>

        </div>
    )
}

export default Calculator


///

        // if (Number(enteredValue) >= 0) {
        //     if (Number(num) === 0 && !Number(enteredValue)) {
        //         setNum(0);
        //     } else {
        //         // setNum((prev) => prev + enteredValue);
        //         setNum((prevCount) => {
        //             return prevCount > 0 ? prevCount + enteredValue : '';
        //         });
        //     }
        // }
