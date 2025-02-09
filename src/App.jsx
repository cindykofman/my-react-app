import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <header>
      <h1>Welcome to Travel Planner ✈️</h1>
      <p>Your journey starts here! Plan your next adventure effortlessly.</p>
    </header>

    <div className="buttons">
      <button onClick={() => alert("Let's start planning!")}>
        Start Planning 🚀
      </button>
      <button onClick={() => alert("Explore Destinations!")}>
        Explore Destinations 🌍
      </button>
    </div>

    <footer>
      <p>Made with ❤️ for travelers</p>
    </footer>
  </div>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Welcome to TripSync! 🚀</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App
