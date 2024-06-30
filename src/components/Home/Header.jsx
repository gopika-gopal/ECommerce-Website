import React, { useState } from "react";
import { FaCartArrowDown, FaHeart, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import './styles/Queries.css';
import { GrUserAdmin } from "react-icons/gr";
import { useSelector, useDispatch } from 'react-redux'
import { CiLogout } from "react-icons/ci";
import { removeUser } from "../../utils/userSlice";
import { toast } from 'react-hot-toast'
import { removeToken } from "../../utils/tokenSlice";
import ContactUs from "../Contact/ContactUs";
const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cart);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(removeUser())
        dispatch(removeToken());
        toast.success('User Logged Out !')
    };
    const signInClicked = () => {
        console.log('Sign in clicked');
        setIsOpen(false);
    }
    const ordersClicked = () => {
        console.log('Orders clicked');
        setIsOpen(false);

    }
    const logoutClicked = () => {
        console.log('Logout clicked');
        setIsOpen(false);

    }
    const settingsClicked = () => {
        console.log('Settings clicked');
        setIsOpen(false);

    }


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-left">
                        <b className="logo">

                            {/* <Link to={'/'} style={{ outline: 'none', textDecoration: 'none', color: 'white' }}>Eco Global</Link> */}

                        </b>
                    </div>
                    <div className="header-right">
                        <div className="header-search">
                            <Link href="" className="search-toggle" role="button"><i className="icon-search-3" /></Link>
                            <form action="" method="get">
                                <div className="header-search-wrapper">
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search for products.." required />
                                    <div className="select-custom">
                                        <select id="cat" name="cat" className="select">
                                            <option value="">All Categories</option>
                                            <optgroup label="For Women">
                                                <option value="4">Casuals</option>
                                                <option value="13">Office Wear</option>
                                                <option value="66">Party wear</option>
                                                {/* <option value="67">Sanitary Care</option> */}
                                            </optgroup>
                                            <optgroup label="For Men">
                                                <option value="21">Casuals</option>
                                                <option value="22">Office Wear</option>
                                                <option value="63">Party wear</option>
                                            </optgroup>
                                            <optgroup label="For Kids">
                                                <option value="63">Colourful</option>
                                                <option value="63">Comfy Wear</option>
                                            </optgroup>
                                            <optgroup label="Unisex">
                                                <option value="31">T-shirt</option>
                                                <option value="32">Shirts</option>
                                                <option value="33">Others</option>
                                                {/* <option value="34">Juices & Health Drinks</option> */}
                                                {/* <option value="57">Super Foods</option> */}
                                            </optgroup>
                                        </select>


                                    </div>
                                    <button className="search-btn" type="submit">
                                        <FaSearch />
                                    </button>

                                </div>
                            </form>
                        </div>

                        {user ? (
                            <div className="user-dropdown" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }} onClick={toggleDropdown}>
                                <p style={{ color: 'white', fontSize: '20px' }}>{user.firstName}</p>
                                <p onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'white', fontSize: '25px', cursor: 'pointer' }}><CiLogout /></p>
                                <p>{user.isAdmin && <Link to={'/admin/dashboard/products'}><GrUserAdmin style={{ color: 'white', fontSize: '22px', cursor: 'pointer' }} /></Link>}</p>
                            </div>
                        ) : (
                            // <Link to="/account/auth" className="header-icon username" style={{ marginTop: '10px' }}>
                            //     <FaUser />
                            // </Link>

                            <div className="user-dropdown">
                                <div className="header-icon username" onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'white', cursor: 'pointer' }}>
                                    <FaUser />
                                </div>
                                {isOpen && (
                                    <ul className="dropdown-menu">
                                        <h2>User Actions</h2>
                                        <li className="user-btn">
                                            <button onClick={signInClicked}>SIGNIN</button>
                                        </li>
                                        <li className="user-btn">
                                            <button onClick={ordersClicked}>MY ORDERS</button>
                                        </li>
                                        <li className="user-btn">
                                            <button onClick={logoutClicked}>LOGOUT</button>
                                        </li>
                                        <li className="user-btn">
                                            <button onClick={settingsClicked}>ACOUNT SETTINGS</button>
                                        </li>
                                    </ul>
                                )}
                            </div>

                        )}

                        <Link to="/" className="header-icon" style={{ marginTop: '10px' }}><FaHeart /></Link>
                        <Link to="/cart" className="header-icon" style={{ marginTop: '10px' }}><FaCartArrowDown />
                            <p className="cartNumber">{cartItems.length}</p>
                        </Link>


                    </div>
                </div>
            </div >
            <div className="header-bottom">
                <div className="container">
                    <div className="left-nav">
                        <a href="#" className="nav-heading">STYLE</a>
                        <a href="#" className="nav-heading">SELF</a>
                        {/* <a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: 'inherit', fontWeight: 'bold', fontSize: '1rem' }}>CULTURE</a> */}
                        <a href="/" className="nav-heading">HOME</a>
                    </div>
                    <div className="center-nav">
                        <b className="logo">
                            <span>FASHION</span>
                        </b>
                    </div>
                    <div className="right-nav">
                        <a href="/about" className="nav-heading" >ABOUT US</a>
                        <a href="/contact" className="nav-heading" >CONTACT US</a>
                        {/* <ContactUs isOpen={isPopupOpen} onClose={closePopup} /> */}

                        {/* <div className="App">
                            <button onClick={openPopup}>Contact Us</button>
                        </div> */}

                    </div>
                </div>
            </div>

        </>
    );
}
export default Header;