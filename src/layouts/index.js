import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../scss/styles.scss'
import logo from '../img/logo.svg'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Last Coin Tonight"
          meta={[
            { name: "description", content: "A short recap of last week in cryptocurrency" },
            { name: "keywords", content: "cryptocurrency, weeks" },
          ]}
        />
        <header className="site__header">
          <h1 className="brand">
            <Link to="/">
              <img src={logo} alt=""/>
              <span className="sr-only">Last Coin Tonight</span>
            </Link>
          </h1>
          <nav className="site__nav">
            <ul>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/archive/">Archive</Link></li>
              <li><Link to="/resources/">Resources</Link></li>
              <li><Link to="/support/">Support</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container site__main">
          <p className="intro">For when you've got just enough time for a quick update on the last week in crypto</p>
          {this.props.children()}
        </main>
        <footer className="site__foter">
          <div className="container">
            <a className="btn -with-icon" href="https://twitter.com/LastCoinTonight"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
          </div>
        </footer>
      </div>
    )
  }
}
