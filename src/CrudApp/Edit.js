import React from 'react'

function Edit(props) {
    const [updateValue,setUpdateValue] = React.useState('');
    const {handleUpdate ,selectedValue } = props;
    console.log('props...???', props);

    const handleUpdateValue = (event)=>{
        handleUpdate(updateValue);
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <h1>Edit Value</h1>
            <input type='text' name='text' placeholder='updated value' onChange={(event)=>setUpdateValue(event.target.value)} value={updateValue ? updateValue : selectedValue} />
            <button onClick={() => handleUpdate(updateValue,selectedValue)}>update</button>
        </div>
    )
}

export default Edit