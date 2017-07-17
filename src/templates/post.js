import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <main className="container">
        <Helmet
          title={post.frontmatter.title}
        />
        <h1 className="heading -huge"><span>{post.frontmatter.date || 'Latest'}</span>{post.frontmatter.title}</h1>
        <div className="article" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/">Home</Link>
      </main>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
      date
    }
  }
}
`
