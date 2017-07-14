import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    console.log(this.props)

    return (
      <div>
        <Helmet
          title="test"
        />
        {/* <h1>{post.frontmatter.title}</h1> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.prev ?
          <Link to={post.frontmatter.prev}>Previous</Link> :
          <Link to="/">Home</Link>
        }
      </div>
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
      prev
    }
  }
}
`
