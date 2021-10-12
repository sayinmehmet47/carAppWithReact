import ReactDOM from 'react-dom';
import React, { useContext, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {
  const { favorites } = useContext(GeneralContext);
  const navigation = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > navigation.current.offsetHeight + 150) {
        navigation.current.classList.add('.active');
      } else {
        navigation.current.classList.remove('.active');
      }
    });
  });

  return (
    <nav ref={navigation} className="navbar fixed-top bg-primary">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/create">Create</Link>
      <Link to="/favorites">💚Favorites({favorites.length})</Link>
    </nav>
  );
};

export default Navbar;
<FontAwesomeIcon icon={faHatCowboy} />;
