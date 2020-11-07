import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import './Header.css';

function Header() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <nav className='header'>
            {/* Logo on the left of the navbar */}
            <Link to='/'>
                <img className='header__logo' src={require('./amazon_logo.png')} alt='logo'/>
            </Link>

             {/* Search bar */}
             <div className='header__search'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
             </div>

             {/* 3 links */}
             <div className="header__nav">
                {/* 1st link */}
                <Link className='header__link' to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link className='header__link' to='/orders'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link className='header__link' to='/'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
             </div>

             {/* Basket */}
             <Link className='header__link' to='/checkout'>
                 <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                 </div>
             </Link>
        </nav>
    )
}

export default Header
