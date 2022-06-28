import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateActivity from './components/CreataActivity';
import Detail from './components/Detail'


function App() {


  return (
    <BrowserRouter>
    <div className="App">      
      <h1>Henry Countries</h1>
      <Switch>
        <Route exact path='/'  > LandingPage</Route>
        <Route exact path='/home'  > home</Route>
        <Route exact path='/activities' > form </Route>
        <Route exact path='/home/:id' >detalles</Route>
      </Switch>
    </div>    
    </BrowserRouter>
  );
}

export default App;

{/* <Switch>
<Route exact path='/' component={ LandingPage } ></Route>
<Route exact path='/home' component={Home} ></Route>
<Route exact path='/activities' component= {CreateActivity} ></Route>
<Route exact path='/home/:id' component= {Detail} ></Route>
</Switch> */}

