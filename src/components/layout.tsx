import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/index.css"

import Header from "./header"

const Layout = ({ children, showHeader = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {showHeader && <Header />}
      <div className="container-main">
        <main>{children}</main>
        <footer className="container-footer container-centered">
          <p>
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a className="external-link" href="https://www.gatsbyjs.com">
              Gatsby
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
