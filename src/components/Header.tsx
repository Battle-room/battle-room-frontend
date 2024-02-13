import '../styles/header.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';

function Header() {
  return(
    <div className='header'>
      <div className='home'>
        <span>UAMG</span>
      </div>
      <img src={logo} alt="" />
      <div className='routes-buttons'>
        <button>Packages</button>
        <button>Blog</button>
      </div>
      <div className='user-menu'>
        <div className='user-auth-buttons'>
          <button>log in</button>
          <button>sign in</button>
        </div>
        <img src={user} alt="" />
      </div>
    </div>
  );
}

export default Header;