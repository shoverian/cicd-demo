// import React, { useState, useEffect } from 'react';
import React from 'react';
// import logo from './vfb-logo.png';
import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Panel from './components/panel/Panel';
import Faqs from './components/faqs/Faqs';

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
      <div className="row">
        <div>
          <Menu />
        </div>
        <div className="container">
          <div className="row">
            {/* <a href="https://www.vafb.com/"><img src={logo} alt="" class="logo" /></a> */}
          </div>
          <div class="row">
            <div className="col-9">
              <Panel />
            </div>
            <div className="col-3">
              <Faqs />
            </div>
          </div> {/* /row */}
        </div> {/* /container */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
