import { APP_NAME } from "@constants/test";
import { formatCount } from "@util/helpers";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-forground">
      <h1>{APP_NAME}</h1>
      <button onClick={() => setCount(count + 1)} type="button">
        Count: {formatCount(count)}
      </button>
    </div>
  );
}

export default App;
