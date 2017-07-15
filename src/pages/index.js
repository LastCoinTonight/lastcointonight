import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {

  render() {

    const post = this.props.data.markdownRemark

    return (
      <div>
        <h2 className="heading -huge">{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
query LatestPost {
  markdownRemark(fields: { slug: { eq: "/posts/" }}) {
    html
    frontmatter {
      title
    }
  }
}
`
