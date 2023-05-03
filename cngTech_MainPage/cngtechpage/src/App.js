import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './pages/MainPage/Main';
import Sub1 from './pages/SubPage/Sub-intro';
import Sub2 from './pages/SubPage/Sub-intro2';
import Sub2_1 from './pages/SubPage/Sub-intro2_1';
import Sub2_2 from './pages/SubPage/Sub-intro2_2';
import Sub3 from './pages/SubPage/Sub-intro-3'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={"/Main"} exact component={Main} /> */}
        <Route path={"/Main"} exact>
          <Main />
        </Route>
        <Route path={"/Sub1"} exact>
          <Sub1 />
        </Route>
        <Route path={"/Sub2"} exact>
          <Sub2 />
        </Route>
        <Route path={"/Sub2_1"} exact>
          <Sub2_1 />
        </Route>
        <Route path={"/Sub2_2"} exact>
          <Sub2_2 />
        </Route>
        <Route path={"/Sub3"} exact>
          <Sub3 />
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
