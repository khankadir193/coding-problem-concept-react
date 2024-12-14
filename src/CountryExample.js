import React from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function CountryComponent() {
  const [selectedOption, setSelectedOption] = React.useState({});

  const handleClickOption = (event) => {
    const name = event.target.value;

    const selectedItemIndex = countries.findIndex((item) => item.name === name);

    console.log("selectedItem...",selectedItemIndex);

    setSelectedOption(selectedItemIndex);
  };

  return (
    <>
      <div>
        <select onClick={(event, index) => handleClickOption(event, index)}>
          {countries.map((item) => {
            return <option>{item.name}</option>;
          })}
        </select>
      </div>
      <h3>Select cities based on the country...</h3>
      <div>
        <select>
          {countries[selectedOption]?.cities?.map((city) => {
            return <option>{city}</option>;
          })}
        </select>
      </div>
    </>
  );
}
