import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoSvg from 'assets/svgs/LogoSvg';
import CartSvg from 'assets/svgs/CartSvg';
import routes from 'routes/pathnames';
import Cart from './Cart';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="navbar_inner">
        <div className="container">
          <div className="navbar_outer">
            <Link to={routes.HOME}>
              <LogoSvg />
            </Link>
            <div className="cart_icon" onClick={() => setIsCartOpen(true)}>
              <CartSvg />
            </div>
          </div>
        </div>
      </header>
      <Cart isOpen={isCartOpen} close={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
