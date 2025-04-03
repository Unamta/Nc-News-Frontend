import { Link } from 'react-router';
import './Header.css';
import avatar from '../assets/boba.png';

function Header() {
  const user = {
    name: 'Unamta',
    imageUrl: avatar
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">NC News!</h1>
        </div>
        <div className="navbar-centre">
          <ul>
            <li><Link to="/articles">All Articles</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <h2>{user.name}</h2>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={user.name + '\'s avatar'}
            style={{
              width: 60,
              height: 60
            }}
          />
        </div>
      </nav>
      <div className="header-gap"></div>
    </>
  );
}

export default Header;

