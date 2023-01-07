import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <nav className="container-header">
      <Link to="/" className="nav-link">
        <strong className="header-home-link">{'<'}</strong>
      </Link>
    </nav>
  </header>
)

export default Header
