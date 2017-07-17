import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class About extends React.Component {
  render() {
    return (
      <main className="site__main container">
        <h1 className="heading -huge">About Last Coin Tonight</h1>
        <p>A recap of the past week in crypto. We bring you up-to-the-week updates on all things blockchain and crypto.</p>

        <h2 className="heading -large">FAQs</h2>

        <h3 className="heading -medium">Why are doing this?</h3>
        <p>Honestly, we are kind of wishing people send us ether, btc, ltc, or whatever for no reason. Also we one of us is doing a presentation on blockchain technology and cryptocurrency and this is as good a way as any to prepare.</p>

        <h3 className="heading -medium">Who are you?</h3>
        <p>That's probably easy enough to figure out.</p>

        <h3 className="heading -medium">Why should I listen to you?</h3>
        <p>We have all seen Wolf of Wallstreet, we are developers, we made a cool little site using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby.js</a>. I mean who else are you going to listen to <a href="https://www.reddit.com/r/ethtrader/" target="_blank" rel="noopener noreferrer">/r/ethtrader</a>? But, let's be clear. <strong>DO NOT INVEST MONEY BASED ON ANYTHING WE SAY.</strong></p>

        <h3 className="heading -medium">What is your stance on moontalk?</h3>
        <p>We are for it.</p>

        <h3 className="heading -medium">Which cryptos do you hold?</h3>
        <p>Great question. We hold BTC, ETC, LTC, ETH, ANS, DCR, FCT, and BAT and thus we are extremely biased towards them. Because they are going to the moon, except BAT, BATs are going nowhere. BAT was a huge mistake because one of us like's the Brave browser and thought it'd be cool to buy it at $.20, it hasn't been cool.</p>

        <h3 className="heading -medium">Alright, I like what you are doing here, how do I help you out?</h3>
        <p>You can <Link to="/donate/">Donate</Link>.</p>

      </main>
    )
  }
}
