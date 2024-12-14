import react, { useState } from "react";
import Edit from "./Edit";

export default function CrudOperation() {
  const [text, setText] = useState([]);
  const [add, setAdd] = useState([]);
  const [edit,setEdit] = useState(false);
  const [selectedValue,setSelectedValue] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    console.log("text,...", text);
    setAdd([...add, text]);
  };

  const handleUpdate = (update,currentValue) => {
    console.log("update,value...", update);

    let updateArray = add.map((item,ind)=>{
        if(item === currentValue){
            return add[ind] = update;
        }else{
            return item;
        }
    })

    console.log('updateArray...',updateArray);

    setAdd(updateArray);
  };

  const handleEdit = (updateValue, ind) => {
    console.log('updated value...',updateValue);
    console.log('ind..???',ind);
    setEdit(true);
    setSelectedValue(updateValue)
  };

  const handleDelete = ()=>{
    console.log('add....',add);
    setAdd('');
    console.log('this is the delete operations....');
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="text"
          placeholder="enter the text"
          onChange={handleChange}
        />
        <button onClick={handleCreate}>Add</button>
      </div>

      {add ? add?.map((tx, index) => {
        return (
          <div style={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
            <h2>{tx}</h2>
            <button
              onClick={() => {
                handleEdit(tx, index);
              }}
            >
              Edit
            </button>
            <button onClick={handleDelete}>delete</button>
          </div>
        );
      }) : null }

      {
        edit ? <Edit selectedValue={selectedValue}  handleUpdate={handleUpdate} /> : null
      }
    </div>
  );
}
