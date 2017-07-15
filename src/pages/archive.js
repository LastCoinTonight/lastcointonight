import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Archive extends React.Component {
  render() {
    return (
      <div>
        <h1>Why?</h1>
        <p>would you think there'd be anything interesting here...</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
