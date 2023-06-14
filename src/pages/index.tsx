import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import { PostList } from "../components/PostList"

const IndexPage = () => (
  <Layout>
    <div>
      <div className="container-centered">
        <h1 className="h1-title">Pavel's Frontend Blog</h1>
        <h2 className="h2-description">
          Hi, my name is Pavel - I'm frontend engineer. This is my personal
          blog.
        </h2>
        <h2 className="h2-description">
          I write on React and Typescript and like unit tests. In this blog I
          write about my experience in web developing.
        </h2>
      </div>

      <div>
        <div className="container-centered h2-description">
          <strong>Check my blog posts 👇</strong>
          <PostList />
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
