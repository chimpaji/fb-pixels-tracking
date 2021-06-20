import { useEffect, useState } from "react";
import ReactPixel from "react-facebook-pixel";
import ViewContent from "./Viewcontent";
import AddToCart from "./AddToCart";
import Purchase from "./Purchase";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={(e) => setCount(count + 1)} className="bg-green-500 p-2">
        Next Event
      </button>
      <button onClick={(e) => setCount(0)} className="bg-blue-500 p-2">
        Reset
      </button>
      {count === 1 && <ViewContent />}
      {count === 2 && <AddToCart />}
      {count === 3 && <Purchase />}
    </div>
  );
}

export default App;
