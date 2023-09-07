// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import List from '../CryptocurrenciesList'
import './index.css'

class Tracker extends Component {
  render() {
    return (
      <div className="cls">
        <List />
      </div>
    )
  }
}

export default Tracker
