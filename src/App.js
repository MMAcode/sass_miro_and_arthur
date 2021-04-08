import logo from './logo.svg';
import './App.css';
import './css/style.css';
import MainWrapper from "./components/MainWrapper";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <header>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
          Learn React with me
        {/*</a>*/}
      </header>
        <body>
        <Header/>
        <MainWrapper/>
        </body>

    </div>
  );
}

export default App;
