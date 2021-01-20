import React from 'react'
import {connect} from 'react-redux'
import {
  removeOrderItem,
  fetchActivity,
  orderActivity
} from '../store/purchase-activity'
import UpdateOrderItem from './UpdateOrderItem'

//cart items will be held in state

class Cart extends React.Component {
  constructor() {
    super()
    this.handleCheckout = this.handleCheckout.bind(this)
  }
  componentDidMount() {
    this.props.getActivity()
  }
  async handleCheckout() {
    const {orderItems} = this.props.items
    const {userLoginId} = this.props.items
    if (!userLoginId) {
      window.alert('Sorry! User must be logged in to checkout')
    } else if (!orderItems || !orderItems.length) {
      window.alert('Your Cart is Empty :C')
    }
    try {
      await this.props.order(this.props.items.id)
      window.location.pathname = `/confirmation/${this.props.items.id}`
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const {items, remove} = this.props
    const {orderItems} = items

    let cartItems =
      !items.id || !orderItems || !orderItems.length ? (
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
                  <p>Unit Price: ${toy.price / 100}</p>
                  <UpdateOrderItem orderItem={orderItem} toy={toy} />
                </div>
                <div>
                  <button type="button" onClick={() => remove(orderItem.id)}>
                    Remove Order Item
                  </button>
                </div>
              </li>
            )
          })}
          <div>
            <h2>
              Total Price: $
              {orderItems
                .map(item => item.toy.price * item.quantity)
                .reduce((total, subtotal) => total + subtotal) / 100}
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
          <button type="button" id="checkout-btn" onClick={this.handleCheckout}>
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
    getActivity: () => dispatch(fetchActivity()),
    remove: id => dispatch(removeOrderItem(id)),
    order: activityId => dispatch(orderActivity(activityId))
  }
}

export default connect(mapStateToProps, mapDispatch)(Cart)
