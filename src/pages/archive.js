import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Archive extends React.Component {
  renderListItems = (post) => {
    const slug = post.node.fields.slug
    const title = post.node.frontmatter.title
    return <li key={slug}><Link to={slug}>{title}</Link></li>
  }

  render() {

    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <Helmet
          title="Last Coin Tonight | Archive"
        />
        <h1>Archive...</h1>
        <ul>
          { posts.length > 0 ? posts.map(this.renderListItems) : <li>Nothing Here</li> }
        </ul>
      </div>
    )
  }
}

export const pageQuery = graphql`
query allPosts {
  allMarkdownRemark(filter: { fields:{slug: {regex: "/^\/posts/g"}} }) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`
