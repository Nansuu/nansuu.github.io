import logo from './logo.svg';
import './App.css';

function App() {
      localStorage.setItem('gtmId','GTM-WSQ88833');
      localStorage.setItem('gtagId', 'G-KNTFHC41QZ');
      localStorage.setItem('optimizeNextId', 'TXZ3SJ9X');
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
        <button onClick={handleClick}>Click 9!</button>
    </div>
      </header>
    </div>
  );
}

export default App;
