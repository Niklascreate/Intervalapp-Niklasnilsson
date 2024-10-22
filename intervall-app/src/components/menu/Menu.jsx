import { useState, useEffect } from 'react';
import './menu.css';

function Menu({ handleAnalogTimer, handleDigitalTimer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = (e) => {
    const nav = document.querySelector('nav');
    if (isOpen && nav && !nav.contains(e.target) && !e.target.matches('#menu-toggle')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeMenu);
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <div>
      <nav className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={(e) => { handleAnalogTimer(); closeMenu(e); }}><a href="#analog">Analog Timer</a></li>
          <li onClick={(e) => { handleDigitalTimer(); closeMenu(e); }}><a href="#digital">Digital Timer</a></li>
        </ul>
      </nav>
      <img id="menu-toggle" onClick={toggleMenu} src="src/assets/navicon.svg" alt="Menu Icon" />
    </div>
  );
}

export default Menu;
