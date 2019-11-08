import React from 'react';
import './App.css';

import Form from './components/mainForm/';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <header className="App-logo">
          <h1>"Вжух" переводчик!</h1>
        </header>
        <Form />
        <a
          className = "App-link"
          href = "https://github.com/Mestima/vzuh_lang"
          target = "_blank"
        >
          Этот проект на GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
