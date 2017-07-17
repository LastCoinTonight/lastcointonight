import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import '../scss/04_sections/_article.scss'

export default class Index extends React.Component {

  render() {

    const post = this.props.data.markdownRemark

    return (
      <main className="site__main container">
        <h1 className="heading -huge"><span>{post.frontmatter.date || 'Latest'}</span>{post.frontmatter.title}</h1>
        <div className="article" dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    )
  }
}

export const pageQuery = graphql`
query LatestPost {
  markdownRemark(fields: { slug: { eq: "/posts/" }}) {
    html
    frontmatter {
      title
      date
    }
  }
}
`
