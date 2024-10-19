import './menu.css';

function Menu() {



    
  return (
    <div>
      <nav className='menu-wrapper'>
        <ul>
          <li>
            <a href="#">Digital timer</a>
          </li>
          <li>
            <a href="#">Analog timer</a>
          </li>
        </ul>
      </nav>
      <button className='menu-btn'>Menu</button>
    </div>
  );
}

export default Menu;
