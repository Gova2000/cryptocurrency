// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Item from '../CryptocurrencyItem'

import './index.css'

class List extends Component {
  state = {tog: false, list: []}

  componentDidMount() {
    this.get()
  }

  get = async () => {
    const fet = await fetch('https://apis.ccbp.in/crypto-currency-converter')

    const data = await fet.json()
    const update = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))

    this.setState({list: update, tog: true})
  }

  render() {
    const {list, tog} = this.state

    return (
      <div>
        {tog ? (
          <div className="cl1">
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img2"
            />
            <ul>
              <div className="card">
                <p>Coin Type</p>
                <div className="type">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </div>

              {list.map(each => (
                <Item list={each} key={each.id} />
              ))}
            </ul>
          </div>
        ) : (
          <Loader
            type="Rings"
            data-testid="loader"
            color="#ffffff"
            height={80}
            width={80}
          />
        )}
      </div>
    )
  }
}
export default List
