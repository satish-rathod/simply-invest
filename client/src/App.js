// client/src/App.js

import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/')
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
