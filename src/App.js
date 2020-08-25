import React from 'react';
import Header from './components/Header';
import './styless.css';
import Main from './pages/main';
import Routes from './routes'

const App = () => (
  <div className='App'>
    <Header></Header>
    <Routes />
  </div>
)

export default App;
