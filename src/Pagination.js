import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Pagination = async() => {

    const [todos, setTodos] = useState([]);
    const [todosPerPage, setTodoPerPage] = useState(50);

    useEffect(() => {
        const result = axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => 
                setTodos(()=>res.data))
            .catch((err) => console.log("api request is failed..", err));
    }, [0]);

    console.log('todossssssssssss',todos);

    let numberOfTotalPages = await Math.ceil(todos?.length / todosPerPage);
    let arr = await new Array(numberOfTotalPages + 1).keys();
    console.log('arr..?????',arr);
    // let pages = [...new Array(numberOfTotalPages + 1).keys()].slice(1);

    // console.log('pages...',pages);


    return (
        <div>
            {todos?.map((item) => {
                return <h1 key={item.id}>{item.title}</h1>;
            })}
            {/* <p>{pages?.map((item) => {
                <span>{item}</span>
            })}</p> */}
        </div>
    );
}

export default Pagination