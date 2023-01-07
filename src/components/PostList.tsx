import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export const PostList = () => {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              logo
            }
          }
        }
      }
      site {
        siteMetadata {
          pathPrefix
          siteUrl
        }
      }
    }
  `)

  const allPosts = allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    path: node.frontmatter.path,
    logo: node.frontmatter.logo
  })) //TODO: made getter

  return (
    <ul className="container-sub">
      {allPosts.map(({ title, logo, path }) => (
        <li className="li-wide" key={path}>
          <Link className="internal-link" to={path}>
            <span>{logo}</span>
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
