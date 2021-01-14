import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchActivity} from '../store/purchase-activity'

//cart items will be held in state

class Cart extends React.Component {
  componentDidMount() {
    this.props.getActivity()
  }

  render() {
    const {items} = this.props
    const toys = items.toys //to get the toys array insidet activity object

    let cartItems = toys.length ? (
      toys.map(item => {
        return (
          <li key={item.id} className="cart-list">
            <div className="item-img">
              <img src={item.ImageUrl} />
            </div>
            <div className="item-desc">
              <span className="item-name">{item.name}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
            </div>
          </li>
        )
      })
    ) : (
      <div>
        <p>Your Cart is Empty :C</p>
      </div>
    )

    return (
      <>
        <div className="cart-container">
          <div className="cart">
            <h2>My Shopping Cart:</h2>
            <ul className="cart-items">{cartItems}</ul>
          </div>
        </div>
        <div className="checkout-container">
          <button type="button" id="checkout-btn">
            Check Out
          </button>

          {/*      //after user selects "checkout"... give them the option to sign in or continue as guest
          <button type="button" id="login-btn">Log in</button> --> link to Auth-form component
          <button type="button" id="signup-btn">Create an Account</button> --> link to user signup component
          <button type="button" id="guest-chkout-btn">Continue as Guest</button> --> link to Checkout form*/}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.activity
  }
}
const mapDispatch = dispatch => {
  return {
    getActivity: () => dispatch(fetchActivity())
  }
}

export default connect(mapStateToProps, mapDispatch)(Cart)
