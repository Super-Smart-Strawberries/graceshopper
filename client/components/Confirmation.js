import React from 'react'
import {connect} from 'react-redux'
import {confirmOrder} from '../store/purchase-activity'

class Confirmation extends React.Component {
  componentDidMount() {
    this.props.confirm(this.props.match.params.id)
  }
  render() {
    const {activity} = this.props
    const {orderItems} = activity

    let orderedItems =
      !activity.id || !orderItems || !orderItems.length ? (
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
                    Subtotal Price: $
                    {(toy.price * orderItem.quantity).toFixed(2)}
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
                .reduce((total, subtotal) => total + subtotal)
                .toFixed(2)}
            </h2>
          </div>
        </div>
      )

    return (
      <div>
        <div className="cart-container">
          <div className="cart">
            <h2>Order Confirmation:</h2>
            <ul className="cart-items">{orderedItems}</ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activity: state.activity
  }
}

const mapDispatch = dispatch => {
  return {
    confirm: id => dispatch(confirmOrder(id))
  }
}

export default connect(mapStateToProps, mapDispatch)(Confirmation)
