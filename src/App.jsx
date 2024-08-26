import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Test app</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me {count}</button>
      </div>
    </>
  );
}

export default App;
