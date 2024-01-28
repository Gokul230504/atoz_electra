import logo from './logo.svg';
import './App.css';
import HomeComp from './components/home';
import { Routes,Route } from 'react-router-dom';
import RefeRence from './components/userref';
import Memo from './components/usememo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HomeComp/>
       <RefeRence/>
       <Memo/>
      </header>
      
    </div>
  );
}

export default App;
