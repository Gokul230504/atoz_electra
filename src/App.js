import logo from './logo.svg';
import './App.css';
import HomeComp from './components/home';
import { Routes,Route } from 'react-router-dom';
import RefeRence from './components/userref';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HomeComp/>
       <RefeRence/>
      </header>
      
    </div>
  );
}

export default App;
