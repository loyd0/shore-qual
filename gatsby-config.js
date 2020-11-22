function getEnv() {
  switch (process.env.NODE_ENV) {
    case "dev":
      return "development"
    case "development":
      return "development"
    case "prod":
      return "production"
    default:
      return process.env.NODE_ENV
  }
}

require("dotenv").config({
  path: `.env.${getEnv()}`,
})

// Handles removing the robot crawlers from Netlify preview domains and improves SEO
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://shorequal.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Shore Qual`,
    description: `Simon Riley is a British qualitative researcher with over 15 years experience. He runs Shore, a qualitative research consultancy with a human touch.`,
    author: `Sam Loyd`,
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "UA-111111111-1", // add your own tracking code
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      // If you want to add options
      // options: {
      //   offset: -50
      // }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"), // CSS Framework
          require("autoprefixer"), // Browser Prefixes
          require(`cssnano`)({
            // Minify CSS
            preset: `default`,
          }),
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: false, // Enable while using `gatsby develop`
    //     tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['.article'], // Don't remove this selector
    //     ignore: ['src/css/custom/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // },

    // Uncomment to add in contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `myu3huharikk`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@elements": "src/components/elements",
        },
        extensions: ["js"],
      },
    },
    // Docs (https://github.com/hupe1980/gatsby-plugin-webfonts/blob/master/gatsby-plugin-webfonts/README.md - for options)
    // Will automatically swap them (package - https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/ )

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shore-qual`,
        short_name: `Shore Qual Consultancy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shore-logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
