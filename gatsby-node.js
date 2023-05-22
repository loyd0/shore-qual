const path = require(`path`)
const { uniq } = require("underscore")



// Create the year field so that it can be filtered by in blog.template.js
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `ContentfulBlogPost`) {
        // add custom fields to content type in formate wanted
        createNodeField({
            node,
            name: `sorting`,
            value: {
                year: node.published.slice(0,4),
                sluggedTags: node?.tags?.map(tag => slugify(tag))
            }
        })
    }
}


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query BlogPostYears {
        posts: allContentfulBlogPost {
            nodes {
                fields {
                    sorting {
                        year
                        sluggedTags
                    }
                }
            }
        }
    }
  `)


  const uniqueYearResults = uniq(result.data.posts.nodes.map(({fields}) => fields.sorting.year))
  const uniqueTagResults = uniq(result.data.posts.nodes.flatMap(({ fields }) => fields.sorting.sluggedTags))


  const posts = result.data.posts.nodes
  // set how many per page
  const postsPerPage = 8
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })


  uniqueYearResults.forEach((year) => {
        createPage({
            path: `blog/year/${year}`,
            component: path.resolve(`./src/templates/blog.template.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                year
            },
        })
    })

  uniqueTagResults.forEach((tag,index) => {
        createPage({
            path: `blog/tags/${tag}`,
            component: path.resolve(`./src/templates/blog.template.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                tag,
            },
        })
    })
}


function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
  
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }