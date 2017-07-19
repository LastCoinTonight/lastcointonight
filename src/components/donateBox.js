import React from "react"

export default class DonateBox extends React.Component {

  render() {

    const { introText } = this.props

    return (
      <div className="donate-box">
        {introText &&
          <p>{introText}</p>
        }
        <p className="wallet-address"><span className="type">ETH</span> <code>0xd04cE3b302729b3405cB5Bbf3997ec01B4639566</code></p>
        <p className="wallet-address"><span className="type">BTC</span> <code>132FPJfatvC7A7FLz8TwfTQ9RLuGhZ3pdJ</code></p>
        <p className="wallet-address"><span className="type">LTC</span> <code>LM8CLDcnmYr4NgxzupdnhcJ3ruDCx3eV2q</code></p>
        <p className="small">Don't see your crypto of choice...let us know! <a href="mailto:lastcointonight@gmail.com" target="_blank" rel="noopener noreferrer">Email us!</a></p>
      </div>
    )
  }
}
