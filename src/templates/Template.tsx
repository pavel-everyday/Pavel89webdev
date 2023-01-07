import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export interface IBlogQueryData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      date: string;
      logo: string;
    }
  }
}

// blog post page template
export default function Template({ data }: { data: IBlogQueryData }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout showHeader>
      <div className="container-centered container-centered__left">
        <span className="blog-logo">{frontmatter.logo}</span>
        <h1 className="blog-title">{frontmatter.title}</h1>
        <h3 className="blog-date">{frontmatter.date}</h3>
        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

// path takes from context
export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        logo
      }
    }
  }
`
