import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainLogo from "/src/assets/main-logo.svg";
import Favourites from "/src/assets/favourites.svg";
import Cart from "/src/assets/cart.svg";
import "./styles.scss";
import cart from "../../lib/api/cart";

function Header({ className }: { className?: string }) {
  const [count, setCount] = useState<number>(cart.getTotalQuantity());

  useEffect(() => {
    function handleCartChange() {
      setCount(cart.getTotalQuantity());
    }

    window.addEventListener("cartUpdated", handleCartChange);

    setCount(cart.getTotalQuantity());

    return () => {
      window.removeEventListener("cartUpdated", handleCartChange);
    };
  }, []);

  return (
    <nav>
      <div className={`header-container ${className}`}>
        <Link to="/">
          <img src={mainLogo} alt="Main logo" className="logo" />
        </Link>

        <div className="icon-container">
          <div className="icon-with-badge">
            <img src={Favourites} alt="Favourites" className="icon-container__favorites" />
            <span className="badge">0</span>
          </div>

          <div className="icon-with-badge">
            <Link to="/cart">
              <img src={Cart} alt="Cart" className="icon-container__cart" />
            </Link>
            <span className="badge">{count}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
