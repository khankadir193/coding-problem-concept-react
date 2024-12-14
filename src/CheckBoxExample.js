import React from "react";

export default function CheckBoxItems() {
  let arr = ["first", "second", "third", "fourth"];
  const [selectedItem, setSelectedItem] = React.useState([]);
  const [checkBoxItems, setcheckBoxItems] = React.useState(arr);

  const handleCheckbox = (event, index) => {
    if (event.target.checked) {
      setSelectedItem([...selectedItem, index]);
    } else {
      let checkedItem = selectedItem.filter((fil) => fil !== index);
      console.log("checkedItem", checkedItem);
      console.log("selectedItem", selectedItem);
      setSelectedItem([...checkedItem]);
    }
    // console.log("event values...", event);
    // console.log("event.target.value", event.target.checked);
    // console.log("index...", index);
  };

  const deleteFun = (event, index) => {
    let remainingItem = arr.filter((fil, ind) => ind !== index);
    let checkedItem = selectedItem.filter((fil) => fil !== index);

    setSelectedItem([...checkedItem]);
    setcheckBoxItems([...remainingItem]);
    console.log("remainingItem", remainingItem);
    console.log("checkedItemDelete..",checkedItem);
  };

  return (
    <>
      {checkBoxItems.map((item, index) => {
        return (
          <li>
            <ul>
              <label>{item}</label>
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox"
                onClick={(event) => handleCheckbox(event, index)}
              />
              {selectedItem.map((ind) => {
                return ind === index ? (
                  <span
                    onClick={(event) => deleteFun(event, index)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    Delete
                  </span>
                ) : (
                  ""
                );
              })}
            </ul>
          </li>
        );
      })}
    </>
  );
}
