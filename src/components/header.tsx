import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// <Link to="/" className="navbar-brand">
// <strong>OMFB</strong>
// </Link>

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <strong className="h2 link-info">OMFB</strong>
          </Link>
        </div>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <Link to="/blog">
              <strong className="h4 link-info">Blog</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
