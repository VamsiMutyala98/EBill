// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.jsx';
import ReactForm from './components/ReactForm';
import { 
  BrowserRouter as Router,
  Switch, 
  Route } from 'react-router-dom'

import Table from './components/Table.jsx';


function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/reactForm">
          <ReactForm />
        </Route>
        <Route exact path="/table">
          <Table />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
