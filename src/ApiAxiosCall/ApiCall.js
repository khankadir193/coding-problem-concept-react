import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCall() {

    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log('res...', res);
                setProducts(res.data);
            })
    }, [0])

    return (
        <div>
            {
                products?.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.id}</h1>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiCall