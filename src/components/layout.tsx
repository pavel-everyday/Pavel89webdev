/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
