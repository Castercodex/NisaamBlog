import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleHamClick = (e) => {
    setOpen(!open);
  };
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="nav">
          <div className="nav-item flex-default head-title ">
            <a className="site-name" href="/">
              Nisam
            </a>

            <ul className="flex-default nav-links">
              <li>
                {" "}
                <button>Marketplace</button>{" "}
              </li>
              <li>
                {" "}
                <button>Discover</button>{" "}
              </li>
              <li>
                <button>Pricing</button>
              </li>
              <li>
                <button>Learn</button>
              </li>
            </ul>
          </div>
          <div className="nav-item auth-btns flex-default">
            <Link className="auth-btn" to={"/login"}>
              <button>Login</button>
            </Link>

            <Link className="auth-btn" to={"/register"}>
              <button>Sign up free</button>
            </Link>
            <div className="ham-container">
              <button onClick={handleHamClick} className="hamburger">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </button>
              {open && (
                <button onClick={handleHamClick} className="cancel">
                  <div className="cancel-symbol">X</div>
                </button>
              )}
            </div>
          </div>{" "}
          <div className="res-section">
            <ul className="res-ham-section"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
