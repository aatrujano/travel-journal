// STYLE
import './NavBar.style.css';

// IMAGE
import logo from '../../images/navBarLogo.png';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className='logoCont'>
                <img src={logo} alt="" />
            </div>
            <span className='navBar__text'>my travel journal.</span>
        </nav>
    )
}

export default NavBar