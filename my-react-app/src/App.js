import logo from './logo.svg';
import './App.css';

function App() {
      localStorage.setItem('gtmId','GTM-KG2Z5TWR');
      localStorage.setItem('gtagId', 'G-H2ZZY9QWSL');
      localStorage.setItem('optimizeNextId', 'MC2JW2NP');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="App">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
        <button onClick={handleClick}>Click here!</button>
    </div>
      </header>
    </div>
  );
}

export default App;
