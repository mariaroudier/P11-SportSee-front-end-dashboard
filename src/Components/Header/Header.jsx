import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {

  return (
    <header>
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-top">
          <NavLink to="/" className='links-top'>Accueil</NavLink>
          <NavLink to="/profil" className='links-top'>Profil</NavLink>
          <NavLink to="/settings" className='links-top'>Réglage</NavLink>
          <NavLink to="/community" className='links-top'>Communauté</NavLink>
        </nav>
    </header>
  );
}

export default Header;
