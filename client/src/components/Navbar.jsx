import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
