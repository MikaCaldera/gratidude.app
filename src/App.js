import logo from './logo.svg';
import './scss/index.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Gratidude App"/>
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
      </header>
    </div>
  );
}

export default App;
