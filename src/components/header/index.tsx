import { Link } from "react-router-dom";
import mainLogo from "/src/assets/main-logo.svg";
import Favourites from "/src/assets/favourites.svg";
import Cart from "/src/assets/cart.svg";
import "./styles.scss"

function Header({ className }: { className?: string }) {
  return (
    <nav>
      <div
        className={`header-container ${className} `}
      >

        <Link to="/">
          <img src={mainLogo} alt="Main logo" className="logo" />
        </Link>

        <div className="icon-container">
          <div>
          <img src={Favourites} alt="Main logo" className="icon-container__favorites" />
          </div>
          <div>
            <Link to="/cart">
            <img src={Cart} alt="Main logo" className="icon-container__cart" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;