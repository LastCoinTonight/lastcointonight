// In your gatsby-node.js
const path = require('path')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === ``) {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    // Add slug as a field on the node.
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

// {
// 	markdownRemark(frontmatter: { slug: { eq: "july-13" }}) {
//     html
//     frontmatter {
//       slug
//       title
//     }
//   }
// }

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("src/templates/post.js")
    const IndexPage = path.resolve("src/templates/index.js")
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                html
                fields {
                  slug
                }
                frontmatter {
                  prev
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {

          if (edge.node.fields.slug === '/posts/') {
            createPage({
              path: '/', // required
              component: IndexPage,
              context: {
                html: edge.node.html,
                slug: edge.node.fields.slug,
                prev: edge.node.frontmatter.prev
              },
            })
          }

          createPage({
            path: edge.node.fields.slug, // required
            component: blogPost,
            context: {
              slug: edge.node.fields.slug,
              prev: edge.node.frontmatter.prev
            },
          })
        })



        return
      })
    )
  })
}
