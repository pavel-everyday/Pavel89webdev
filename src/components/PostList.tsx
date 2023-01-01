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
              slug
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
    slug: node.frontmatter.slug,
    logo: node.frontmatter.logo
  })) //TODO: made getter

  return (
    <ul className="container-sub">
      {allPosts.map(({ title, logo, slug }) => (
        <li className="li-wide" key={slug}>
          <Link className="internal-link" to={`${slug}`}>
            <span>{title}</span>
            <span>{logo}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
