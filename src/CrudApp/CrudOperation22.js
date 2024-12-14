import React, { useState } from 'react';

function CrudOperation2() {
  // Initialize data as an array of objects
  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const [newItem, setNewItem] = useState({ id: '', name: '' });

  // Function to handle adding a new item
  const handleAddItem = () => {
    if(newItem.name && data.length){
      let newItemObj = {...newItem,id:data[data.length-1]?.id+1}
      console.log('newItemObj',newItemObj);
        setData([...data, newItemObj]);
    }else if(newItem.name){
      let newItemObj = {...newItem,id:1};
      setData([...data,newItemObj]);
    }
    //setNewItem({ id: '', name: '' });
  };

  // Function to handle updating an item
  const handleUpdateItem = (updatedItem) => {
    const updatedData = data.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setData(updatedData);
  };

  // Function to handle deleting an item
  const handleDeleteItem = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <div>
      <h1>CRUD Operations in React</h1>

      {/* Create - Add new item */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Read - Display items */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            <button
              onClick={() =>
                handleUpdateItem({ ...item, name: `${item.name} (Updated)` })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudOperation2;
