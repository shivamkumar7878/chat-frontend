// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Login from './pages/Login';
// // import Register from './pages/Register';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React from 'react';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <SignupPage />
    </div>
  );
}

export default App;