// import React, { useState, useEffect } from 'react';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';

const App = () => {
//   const [message, setMessage] = useState('...loading')

//   useEffect(() => {
//     async function fetchData () {
//       try {
//         let data = await (await fetch('/api')).json()
//         setMessage(data.message)
//       } catch (err) {
//         setMessage(err.message)
//       }
//     }
//     fetchData()
//   }

  return (
    <div className="App">
      <div>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
