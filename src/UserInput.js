import {useEffect, useState}  from 'react'
import useDebounce from './hooks';

function UserInput() {

  const [inputValue, setInputValue] = useState("");
  // const [isFocus, setIsFocused] = React.useState(false);
  // const [isBlur, setIsBlur] = React.useState(false);
  const  debaunceValue  = useDebounce(inputValue);


  useEffect(()=>{
    console.log('debaunceValue..',debaunceValue);
  },[debaunceValue])




  const handleChange = (event) => {
    //console.log('event.target.value',event.target.value);
    setInputValue(event.target.value);
  }

  // const handleFocus = (event) => {
  //   console.log('eventFocus..', event);
  //   setIsFocused(true);
  // };

  // const handleBlur = (event) => {
  //   setIsBlur(true);
  // }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Input Text:{debaunceValue ? debaunceValue : 'value NotFound'}</h1> 
      <input value={inputValue} onChange={handleChange} />
    </div>
  )
}

export default UserInput