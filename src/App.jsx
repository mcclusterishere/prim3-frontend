import { useState } from 'react'

function App() {
  const [response, setResponse] = useState("");

const handleClick = () => {
  fetch('https://prim3-backend.onrender.com/prim3', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: "Hello Prim3 AGI!" })
  })
  .then(res => res.json())
  .then(data => {
    setResponse(data.response || data.message || "No valid response received");
  })
  .catch(err => {
    console.error("API call failed:", err);
    setResponse("API call failed");
  });
};

  return (
    <div>
      <h1>Prim3 AGI Frontend Integration</h1>
      <button onClick={handleClick}>
        Click to test backend!
      </button>
      <p>Response from backend: {response}</p>
    </div>
  )
}

export default App