import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Country from './components/Country/Country';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Country></Country>
    </div>
  );
}

export default App;
