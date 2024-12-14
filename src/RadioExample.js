import React from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekdays", "weekend"];

export default function RadioComponent() {
  const [selectedValue, setSelectedValue] = React.useState();
  const [selectedValue1, setSelectedValue1] = React.useState();

  const handleChange = (event) => {
    console.log("0000", event.target.value);
    setSelectedValue(event.target.value);
  };

  const handleChange1 = (event) => {
    console.log("0000", event.target.value);
    setSelectedValue1(event.target.value);
  };

  return (
    <>
      <div>
        <h2>Select Games...</h2>
        {options.map((item, index) => {
          return (
            <label>
              {item}
              <input
                type="radio"
                value={item}
                onChange={handleChange}
                checked={selectedValue === item}
              />
            </label>
          );
        })}
      </div>
      <div>
        <h2>Select Days...</h2>
        {days.map((item, index) => {
          return (
            <label>
              {item}
              <input
                type="radio"
                value={item}
                onChange={handleChange1}
                checked={selectedValue1 === item}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}
