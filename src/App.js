import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './components/NotFound';
import Create from './pages/Create/Create';
import CarDetails from './components/CarDetails';
import Favorites from './components/Favorites';
import GeneralContextProvider from './context/GeneralContext';

function App() {
  return (
    <Router>
      <div className="App">
        <GeneralContextProvider>
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
              <Create />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>

            <Route path="/cars/:id">
              <CarDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </GeneralContextProvider>
      </div>
    </Router>
  );
}

export default App;
