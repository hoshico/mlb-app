import mlblogo from './mlb-logo.svg';
import './App.css';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mlblogo} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
}

export default App;
