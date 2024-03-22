import './App.css';

import { useState } from 'react';

import viteLogo from '/vite.svg';

import eslintLogo from './assets/eslint.svg';
import reactLogo from './assets/react.svg';
import tailwindLogo from './assets/tailwind.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.tailwindcss.cn/" target="_blank">
          <img src={tailwindLogo} className="logo tailwind" alt="Tailwind logo" />
        </a>
        <a href="https://eslint.org/" target="_blank">
          <img src={eslintLogo} className="logo eslint" alt="Eslint logo" />
        </a>
      </div>
      <h1>Vite + React + Tailwind + Eslint</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
