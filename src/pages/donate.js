import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Subscribe extends React.Component {
  render() {
    return (
      <main className="site__main container">
        <h1 className="heading -huge">This is all free, but wouldn't it be great if it wasn't?</h1>
        <div className="donate-box">
          <p>Don't waste your time reading just donate here:</p>
          <p className="wallet-address"><span className="type">ETH:</span> <code>0xd04cE3b302729b3405cB5Bbf3997ec01B4639566</code></p>
          <p className="small">Don't see your crypto of choice...let us know! <a href="mailto:lastcointonight@gmail.com" target="_blank" rel="noopener noreferrer">Email us!</a></p>
        </div>

        {/* @TODO add links to bitcoin guy reference and UET reference... */}
        <p>Following in the footsteps of bitcoin guy, UET, and every speculator out there we are trying to cash in on all the hype before cryptocurrency just becomes...currency. By donating to us you get:</p>

        <ul>
          <li>Weekly wild speculation, crypto news, and unabashed moon talk</li>
          <li>Questionable analysis</li>
          <li>Pretty solid curated resource lists</li>
          <li>Highlights from the dumbest things people on /r/ethtrader and twitter are saying</li>
        </ul>

        <p>By not donating you get:</p>

        <ul>
          <li>All the same stuff</li>
        </ul>

        <p>So what are you waiting for? Help us pay our student loans:</p>

      </main>
    )
  }
}
