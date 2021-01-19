import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postOrderItem} from '../store/purchase-activity'

class AddToCart extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    try {
      await this.props.addToCart(this.props.singleToy.id, this.state)
      window.alert(
        `${this.props.singleToy.name} x ${
          this.state.quantity
        } units added to Cart`
      )
      this.setState({
        quantity: 1
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const {singleToy} = this.props
    let qtyNum = []
    for (let i = 1; i <= 50; i++) {
      qtyNum.push(
        <option key={i} value={i}>
          Qty: {i}
        </option>
      )
    }

    return (
      <div>
        {singleToy.inventory < 10 ? (
          <div>LOW IN STOCK! HURRY AND BUY BEFORE IT'S OUT! </div>
        ) : (
          <div>IN STOCK</div>
        )}
        <div>
          <form onSubmit={this.handleSubmit}>
            <select
              name="quantity"
              type="number"
              value={this.props.quantity}
              onChange={this.handleChange}
            >
              {qtyNum}
            </select>
            <button type="submit">Add To Cart</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  orderItem: state.orderItem
})

const mapDispatch = disptach => ({
  addToCart: (id, newOrderItem) => disptach(postOrderItem(id, newOrderItem))
  // addToOrderItem: (newOrder) => disptach(postOrder(newOrder)),
})

export default connect(mapState, mapDispatch)(AddToCart)
