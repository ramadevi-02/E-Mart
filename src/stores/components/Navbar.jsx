import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
<>
    <div className="navSection">
        <div className="title">
            <h2>E-Mart</h2>
        </div>
            <div className="seacrh">
                <input type="text" placeholder='Search...' />
            </div>
                <div className="user">
                    <div className="user-detail">
                        signIN/signUp
                    </div>
                    <div className="cart">
                        Cart
                    </div>
                </div>
                </div>
                <div className="subMenu">
                    <ul>
                        <Link to='/ac'>      <li>AC</li>          </Link>
                        <Link to='/books'>   <li>Books</li>       </Link> 
                        <Link to='/computers'><li>Computers</li>  </Link> 
                        <Link to='/fridge'>   <li>Fridge</li>     </Link> 
                        <Link to='/men'>      <li>Men</li>        </Link> 
                        <Link to='/mobiles'> <li>Mobile</li>      </Link>
                        <Link to='/speaker'>  <li>Speaker</li>    </Link> 
                        <Link to='/tv'>       <li>Tv</li>         </Link> 
                        <Link to='/watch'>    <li>Watch</li>      </Link> 
                        <Link to='/women'>    <li>Women</li>      </Link> 
                    </ul>
                </div>
   </>
  );
};

export default Navbar
