import React from 'react';
import './App.css';

import Form from './components/mainForm/';

function App() {
  return (
    <div className="App">
      <div className="App-main position-relative">
        <h1 className="py-5 m-5">Жужа транслятор!</h1>
        <Form />
        <a
          className = "App-link"
          href = "https://github.com/Mestima/vzuh_lang"
          target = "_blank"
        >
          Этот проект на GitHub
        </a>
        <br />
      </div>
    </div>
  );
}

export default App;
