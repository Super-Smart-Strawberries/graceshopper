import React, {Component} from 'react'

class AddToCart extends Component {
  constructor() {
    super()
    this.state = {
      toyQty: null,
      addToCart: false
    }
  }
  render() {
    const {singleToy, addToCart} = this.props
    return (
      <div>
        {singleToy.inventory < 10 ? (
          <div>LOW IN STOCK! HURRY AND BUY BEFORE IT'S OUT! </div>
        ) : (
          <div>IN STOCK</div>
        )}
        <div>
          <form onSubmit={addToCart}>
            <select name="Qty" type="dropdown" value={this.state.toyQty}>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
            </select>
            <button type="submit">Add To Cart</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddToCart
