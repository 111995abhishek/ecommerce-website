import React from 'react';
import Header from './components/header';
import  './default.scss';
import HomePage from './Pages/homepage/HomePage';
import Register from './Pages/register';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">

        <Route exact path='/' component={HomePage}>
          <HomePage/>
        </Route>
        <Route  exact path='/register' component={Register}>
          <Register/>
        </Route>
      </div>
      
      
    </div>
  );
}

export default App;
