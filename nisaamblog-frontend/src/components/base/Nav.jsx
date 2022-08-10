import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="nav">
          <div className="nav-item flex-default head-title ">
            <a className="site-name" href="/">
              Nisam
            </a>
            <ul className="flex-default">
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
            <button className="auth-btn">Login</button>

            <button className="auth-btn">Sign up free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
