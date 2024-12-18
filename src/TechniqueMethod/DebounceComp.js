import React, { useState, useMemo } from "react";

// Debounce utility function
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const DebounceComp = () => {
  const [query, setQuery] = useState("");

  // Memoized debounce function
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        console.log("Searching for value...", value);
      }, 500),
    []
  );

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "1vw",
    },
    input: {
      padding: "1vw",
      borderRadius: "4px",
      width: "30%",
      border: "1px solid #ccc",
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search Text"
        value={query}
        style={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default DebounceComp;
