import React from 'react'
import useCounter from './useCounter'


function CounterComponent2() {

  const [count,incrementFun,decrementFun] = useCounter();


  return (
    <>
      <div style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
        <h3 style={{backgroundColor:'green',width:'5%',height:'4vh',marginRight:'1rem'}}>{count}</h3>
      </div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: '3rem' }}>
        <button style={{ backgroundColor: 'purple', width: '10%', height: '5vh', marginRight: '1rem' }} onClick={incrementFun}>Increment</button>
        <button style={{ backgroundColor: 'purple', width: '10%', height: '5vh', marginRight: '1rem' }} onClick={decrementFun}>Decrement</button>
      </div>
    </>
  )
}

export default CounterComponent2;