import React from 'react'
const outputScreenDesign = {
    width:"39.7%",
    height:"9vh",
    background:"antiquewhite",
    fontSize:'3rem'
}

function OutputScreen({number}) {

  console.log('outputScreeenProps..values..',number);

  return (
    <input type='text' readOnly value={number} style={outputScreenDesign} />
  )
}

export default OutputScreen