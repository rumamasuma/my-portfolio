
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/Home/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route path='/home'>
      <Home></Home>
      </Route>
      <Route  path='/about'>
     <AboutMe></AboutMe>
      </Route>
    </Switch>
  </Router>
  {/* <Home></Home> */}
    </div>
  );
}

export default App;
