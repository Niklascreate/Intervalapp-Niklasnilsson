import { useState, useEffect } from 'react';
import './menu.css';
import { motion } from 'framer-motion';

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
        <motion.li 
            onClick={(e) => { handleAnalogTimer(); closeMenu(e); }} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <a href="#analog">Analog Timer</a>
          </motion.li>
          <motion.li 
            onClick={(e) => { handleDigitalTimer(); closeMenu(e); }} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <a href="#digital">Digital Timer</a>
          </motion.li>
        </ul>
      </nav>
      <motion.aside 
        className='meny-style'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        >
        <img id="menu-toggle" onClick={toggleMenu} src="src/assets/navicon.svg" alt="Menu Icon" />
      </motion.aside>
    </div>
  );
}

export default Menu;
