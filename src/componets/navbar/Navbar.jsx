import './navbar.scss';
import Flag from 'react-world-flags';
import {Link, Navlink} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
            <img src="assests/hostL.png" alt="#" />
         <div className='lang'>
            <Flag code='GB' />
            <span>English</span>
         </div>
        </div>

        <div className="right">
            <ul>
                <li>
                   <Link to='/'>WordPress</Link>
                   <KeyboardArrowDownIcon/>
                </li>
                <li>
                   <Link to='/'>Website builder</Link>
                   <KeyboardArrowDownIcon/>
                </li>
                <li>
                   <Link to='/'>Hosting</Link>
                   <KeyboardArrowDownIcon/>
                </li>
                <li>
                   <Link to='/'>Pro</Link>
                </li>
                <li>
                   <Link to='/'>Domains</Link>
                </li>
            </ul>
            <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
