import React from 'react'

function SampleComponent({ name , address }) {
    return (
        <div>
            <h2>Hi i am SampleComponent....</h2>
            {
                name && address ? <h1> Hi i am {name} and i am from {address}</h1> : ''
            }
        </div>
    )
}

export default SampleComponent

const hocFunction = (Components) => {

    return ((props) => (
        <div style={{backgroundColor:'red',padding:"45px"}}>
            i am HOC component
            <Components {...props}/>

        </div>
    )
    )
}

const HOCofSampleComponent = hocFunction(SampleComponent);

export { HOCofSampleComponent };