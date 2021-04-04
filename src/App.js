import React from 'react';
import Header from './components/header';
import  './default.scss';
import HomePage from './Pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <HomePage/>
      </div>
      
    </div>
  );
}

export default App;
