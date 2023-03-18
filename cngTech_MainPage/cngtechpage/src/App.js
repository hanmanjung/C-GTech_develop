import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './pages/MainPage/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={"/Main"} exact component={Main} /> */}
        <Route path={"/Main"} exact>
          <Main />
        </Route>
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
          </header>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
