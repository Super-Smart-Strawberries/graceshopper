import React, {Component} from 'react'

class AddToCart extends Component {
  constructor() {
    super()
    this.state = {
      toyQty: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt) {
    const {id} = this.props.singleToy
    evt.preventDefault()
    console.log(`${this.state.toyQty} quantities of ToyId ${id} added to cart`)
    this.setState({
      toyQty: null
    })
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
              name="toyQty"
              type="number"
              value={this.state.value}
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

export default AddToCart
