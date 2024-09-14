import { useState } from "react";

function App() {
  const obj1 = [
    { id: 1, heading: "hi", dec: "first" },
    { id: 2, heading: "hello", dec: "second" },
    { id: 3, heading: "helloth", dec: "third" }
  ];

  const [state, setState] = useState({});
  const [check, SetChecked] = useState({});

  function HandleDisplay(id) {
    const f = obj1.find((item) => item.id === id);
    setState(f || {});
    
    // Set the value to true for the selected item
    SetChecked((prev) => ({ ...prev, [id]: true }));
  }

  
  return (
    <div>
      {obj1.map((item) => (
        <div key={item.id}>
          <div style={{ display: "flex", gap: "5px" }}>
            {/* Use check[item.id] to determine if the radio button should be checked */}
            <input type="radio" checked={check[item.id] === true} readOnly />
            <div onClick={() => HandleDisplay(item.id)}>{item.heading}</div>
            {item.id === state.id && <p>{state.dec}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
