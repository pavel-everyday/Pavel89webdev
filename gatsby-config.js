module.exports = {
  siteMetadata: {
    title: `Pavel's Frontend Blog`,
    description: `Just another one frontend blog`,
    author: `@Pavel89webdev`,
    // siteUrl: ``,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownPosts`,
        path: `${__dirname}/src/markdownPosts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
  ],
}
