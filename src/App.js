import React from 'react';
import Header from './components/header';
import  './default.scss';
import HomePage from './Pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage/>
    </div>
  );
}

export default App;
