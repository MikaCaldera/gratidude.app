import logo from './logo.svg';
import './styles/index.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header title="CheezIts"/>
     <img src={logo} height="100" width="100" alt="dude"/>
    </div>
  );
}

export default App;
