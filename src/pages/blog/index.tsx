import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Template from "../../templates/Template"

// TODO: typing all !!!
const BlogPage = () => {
  const allPostsResponse = useStaticQuery(graphql`
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
            }
          }
        }
      }
    }
  `)

  const allPosts = allPostsResponse.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
  })) //TODO: made getter

  return (
    <Layout>
      <div>
        <h1>Blog posts</h1>
      </div>
      <ul>
        {allPosts.map(({ title, slug }) => (
          <li>
            <a href={slug}>{title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage
