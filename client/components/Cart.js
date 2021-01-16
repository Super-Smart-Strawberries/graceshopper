import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleActivity} from '../store/purchase-activity'

//cart items will be held in state

class Cart extends React.Component {
  componentDidMount() {
    this.props.getActivity(this.props.match.params.id)
  }

  render() {
    const {items} = this.props
    const {orderItems} = items
    console.log('this.props from Cart: ', this.props)

    let cartItems = !items.id ? (
      <div>
        <p>Your Cart is Empty :C</p>
      </div>
    ) : (
      <div>
        {orderItems.map(orderItem => {
          const {toy} = orderItem
          return (
            <li key={orderItem.id} className="cart-list">
              <div className="item-img">
                <img src={toy.image} height="100" />
              </div>
              <div className="item-desc">
                <span className="item-name">
                  <b>{toy.name}</b>
                </span>
                <p>Description: {toy.description}</p>
                <p>Unit Price: ${toy.price}</p>
                <p>Quantity: {orderItem.quantity}</p>
                <p>
                  Subtotal Price: <b>${toy.price * orderItem.quantity}</b>
                </p>
              </div>
            </li>
          )
        })}
        <div>
          <h2>
            Total Price: $
            {orderItems
              .map(item => item.toy.price * item.quantity)
              .reduce((total, subtotal) => total + subtotal)}
          </h2>
        </div>
      </div>
    )

    return (
      <div>
        <div className="cart-container">
          <div className="cart">
            <h2>My Shopping Cart:</h2>
            <ul className="cart-items">{cartItems}</ul>
          </div>
        </div>
        <div className="checkout-container">
          <button
            type="button"
            id="checkout-btn"
            onClick={() =>
              console.log(
                `Sign In or Continue as Guest for Cart Id #${
                  this.props.match.params.id
                } Checkout.`
              )
            }
          >
            Check Out
          </button>
        </div>
      </div>
      // after user selects "checkout"... give them the option to sign in or continue as guest
      // <button type="button" id="login-btn">Log in</button> --> link to Auth-form component
      // <button type="button" id="signup-btn">Create an Account</button> --> link to user signup component
      // <button type="button" id="guest-chkout-btn">Continue as Guest</button> --> link to Checkout form
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
    getActivity: id => dispatch(fetchSingleActivity(id))
  }
}

export default connect(mapStateToProps, mapDispatch)(Cart)
