import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateActivity from './components/CreateActivity';
import Detail from './components/Detail'


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Countries</h1>
        <Switch>
          <Route exact path='/' component={ LandingPage } ></Route>
          <Route exact path='/home' component={ Home } ></Route>
          <Route exact path='/activities' component={CreateActivity} ></Route>
          <Route exact path='/detail/:id' component={Detail} ></Route>
          {/* falta organizar esta ultima  linea */}
          <Route exact path='*' >PAG no existe</Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;