 module.exports = {
  siteMetadata: {
    title: `САЛЫМ`,
    description: `Коомго салым кошолу`,
    author: `FEgakusey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `final-project`,
        short_name: `salym`,
        start_url: `/`,
        background_color: `#F64A46`,
        theme_color: `#F64A46`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, 
      },
    },
  ],
}
