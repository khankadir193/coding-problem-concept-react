import React,{useEffect} from 'react'
import axios from 'axios';

export default function ApiPostCall() {

    const postData = {
        name:"Abdul Kadir Khan",
        address:"Gorakhpur",
    }

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    const headers = {
        'Content-Type':'application/json'
    }

    useEffect(()=>{
        axios.post(apiUrl,postData,{headers : headers})
        .then((res)=>{
            console.log('Response data...',res);
        })
        .catch((err)=>{
            console.log('err...',err);
        })

        axios.get(apiUrl)
        .then((res)=>{
            console.log('getting data from updating data...',res);
        })
        .catch((err)=>{
            console.log('err...',err);
        })

    })


  return (
    <div>ApiPostCall</div>
  )
}
