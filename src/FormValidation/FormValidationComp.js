import React, { useState } from 'react';

const formDesign = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    gap:'1vw',
    marginTop:'3vw',
    flexDirection:'column'
};

const FormValidationComp = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('e form submitssion',e.target.input);
        console.log('email...',email);
        console.log('firstName...',firstName);
        console.log('lastName...',lastName);

        alert(`email:-${email} firstName:- ${firstName} lastName:- ${lastName}`)
    };



    return (
        <div>
            <form onSubmit={handleSubmit} style={formDesign}>
                <input type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} required />
                <input type='text' placeholder='enter your first name' onChange={(e)=>setFirstName(e.target.value)} required />
                <input type='text' placeholder='enter your last name' onChange={(e)=>setLastName(e.target.value)} required />
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default FormValidationComp