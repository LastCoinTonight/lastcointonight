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
        <div>
          <div>
            <h1>
              <Link to="/">
                <img src={logo} alt=""/>
                <span className="sr-only">Last Coin Tonight</span>
              </Link>
            </h1>

          </div>
        </div>
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}
