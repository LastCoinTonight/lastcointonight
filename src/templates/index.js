import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "../scss/test.scss"


class IndexTemplate extends React.Component {

  render() {

    const post = this.props.pathContext
    console.log(this.props)
    console.log(post)

    return (
      <div>
        <h1>This is happening...</h1>
        <p><Link to="/posts">The Latest</Link></p>
        <p>Soon.</p>
        <p>Last Coin Tonight doesn't even make sense as a name, but I already bought the domain so we are doing this.</p>
        <p><a href="https://twitter.com/LastCoinTonight">We have a Twitter by the way</a></p>
        <p><Link to="/page-2/">Go to page 2</Link></p>

        <h1>stuff</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.prev ?
          <Link to={post.prev}>Previous</Link> :
          <Link to="/">Home</Link>
        }
      </div>
    )
  }
}

export default IndexTemplate

export const pageQuery = graphql`
query myQuery {
  markdownRemark(fields: { slug: { eq: "/posts/" }}) {
    html
    frontmatter {
      title
      prev
    }
  }
}
`
