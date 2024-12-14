import React from 'react'

function DataFetch() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log('res...',res);
            return res.json();
        }).then((data)=>{
             console.log('data..',data);   
             setProducts(data)
        }).catch(()=>{
            console.log('getting error...');
        })
    },[])

    return (
        <div>{products[0]?.userId}</div>
    )
}

export default DataFetch