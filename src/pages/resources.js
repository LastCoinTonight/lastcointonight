import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Resources extends React.Component {

  renderListItems = (resource) => {
    const slug = resource.node.fields.slug
    const title = resource.node.frontmatter.title
    return <li key={slug}><Link to={slug}>{title}</Link></li>
  }

  render() {

    const resources = this.props.data.allMarkdownRemark.edges

    return (
      <main className="container">
        <Helmet
          title="Last Coin Tonight | Resources"
        />
        <h1>Resources...</h1>
        <ul>
          { resources.length > 0 ? resources.map(this.renderListItems) : <li>Nothing Here</li> }
        </ul>
      </main>
    )
  }
}

export const pageQuery = graphql`
query allResources {
  allMarkdownRemark(filter: { fields:{slug: {regex: "/^\/resources/g"}} }) {
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
