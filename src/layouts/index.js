import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import DonateBox from '../components/donateBox'
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
        <header className="site__header container">
          <h1 className="brand">
            <Link to="/">
              <img src={logo} alt=""/>
              <span className="sr-only">Last Coin Tonight</span>
            </Link>
          </h1>
          <nav className="site__nav">
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/LastCoinTonight"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
              <li><Link to="/about/">About</Link></li>
              {/* <li><Link to="/archive/">Archive</Link></li> */}
              <li><Link to="/resources/">Resources</Link></li>
              <li className="highlight"><Link to="/donate/">Donate</Link></li>
            </ul>
          </nav>
        </header>
        {this.props.children()}
        <footer className="site__footer">
          <div className="container">
            <a className="btn -with-icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/LastCoinTonight"><i className="fa fa-twitter" aria-hidden="true"></i> That's right, we are on Twitter too (and ONLY on twitter)</a>
            <DonateBox
              introText="Donate"
            />
          </div>
        </footer>
      </div>
    )
  }
}
