
import { useEffect, useState } from 'react'

function useDebounce(inputValue, delay = 1000) {

    const [debaunceValue, setDebaunceValue] = useState(inputValue);


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebaunceValue(inputValue)
        }, delay)

        console.log('timer..',timer)

        return () => {
            clearTimeout(timer)
        }
    }, [inputValue,delay])

    return debaunceValue;
}

export default useDebounce