import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Create from './components/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
