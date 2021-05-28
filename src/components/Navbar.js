import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> 
        
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/create">Create</Link>
    </nav>
  );
};

export default Navbar;
<FontAwesomeIcon icon={faHatCowboy} />;
