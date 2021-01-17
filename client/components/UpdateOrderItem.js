import React from 'react'
import {connect} from 'react-redux'
import {updateOrderItem} from '../store/purchase-activity'

const UpdateOrderItem = props => {
  const {orderItem} = props
  const {toy} = orderItem

  const handleSubmit = event => {
    props.update(orderItem.id, {quantity: +event.target.value})
  }

  console.log('props from UpdateOrderItem: ', props)

  let qtyNum = []
  for (let i = 1; i <= 50; i++) {
    qtyNum.push(
      <option key={i} value={i}>
        Qty: {i}
      </option>
    )
  }

  return (
    <div key={orderItem.id}>
      <select onChange={handleSubmit}>{qtyNum}</select>
      <p>
        Subtotal Price: <b>${toy.price * orderItem.quantity}</b>
      </p>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    update: (orderItemId, update) =>
      dispatch(updateOrderItem(orderItemId, update))
  }
}

export default connect(null, mapDispatch)(UpdateOrderItem)
