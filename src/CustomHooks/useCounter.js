import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React,{useState} from 'react'

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const incrementFun = () => {
        setCount(count + 1);
    }

    const decrementFun = () => {
        setCount(count - 1);
    }

    return [count,incrementFun,decrementFun];
}

export default useCounter;