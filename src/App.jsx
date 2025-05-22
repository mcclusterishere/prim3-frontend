import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState("");

  const fetchBackend = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/prim3`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: "Hello Prim3 AGI!" })
      });

      const data = await res.json();
      setResponse(`Response from backend: ${data.response}`);
    } catch (error) {
      setResponse(`API call failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Prim3 AGI Frontend Integration</h1>
      <button onClick={fetchBackend}>Click to test backend!</button>
      <p>{response}</p>
    </div>
  );
}

export default App;