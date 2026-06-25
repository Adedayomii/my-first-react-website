import SupersimpledevLogo from '../assets/icons/logo-white.png';
import Search from '../assets/icons/search-icon.png';
import Cart from '../assets/icons/cart-icon.png';
import './header.css';
import {Link} from 'react-router';

export function Header () {
    return (
        <div className="parent-div">
            <div className="logo">
                <img src={SupersimpledevLogo} className='logo-image'/>
            </div>

            <div className="middle-section">
                <input placeholder='Search' className='input-box'/>
                <button className='search-container'><img src={Search} className="search-botton" /></button>
            </div>
            
            <div className="right-section">
                    <div className='order'><Link to="/order">Order</Link></div>
                    <div className='cart-box'>
                    <div className='cartandQuantity'>
                        <img src={Cart} className="cart" />
                        <div className="cartQuantity">3</div>
                    </div>
                    <div className='cart-name'>Cart</div>
                </div>
                
            </div>


        </div>
    );
}