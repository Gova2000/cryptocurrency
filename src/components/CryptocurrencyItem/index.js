// Write your JS code here
import './index.css'

const Item = props => {
  const {list} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = list

  return (
    <>
      <li>
        <div className="card1">
          <img src={currencyLogo} alt="currency_name" className="img1" />
          <p>{currencyName}</p>
        </div>
        <div className="type1">
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </li>
    </>
  )
}

export default Item
