import '../styles/header.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div className='header'>
      <Link to='/'>
        <div className='home'>
          <span>UAMG</span>
        </div>
      </Link>
      <img src={logo} alt="" />
      <div className='routes-buttons'>
        <button>Packages</button>
        <button>Blog</button>
      </div>
      <div className='user-menu'>
        <div className='user-auth-buttons'>
          <Link to='/login'>
            <button>log in</button>
          </Link>
          <Link to='/signin'>
            <button>sign in</button>
          </Link>
        </div>
        <img src={user} alt="" />
      </div>
    </div>
  );
}

export default Header;