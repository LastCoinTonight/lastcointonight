import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>This is happening...</h1>
        <p>Soon.</p>
        <p>Last Coin Tonight doesn't even make sense as a name, but I already bought the domain so we are doing this.</p>
        <p><a href="https://twitter.com/LastCoinTonight">We have a Twitter by the way</a></p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
