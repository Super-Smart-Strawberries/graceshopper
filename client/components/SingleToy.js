import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleToy} from '../store/singleToy'
import {setCart} from '../store/cart'
import AddToCart from './AddToCart'

class SingleToy extends Component {
  addToCart(toy) {
    this.setCart(toy)
    // must add this to user session.
  }
  componentDidMount() {
    this.props.setSingleToy(this.props.match.params.toyId)
  }

  render() {
    const {singleToy} = this.props

    return (
      <div>
        <div>{singleToy.name}</div>
        <div>{singleToy.description}</div>
        <div>{singleToy.price}</div>
        <div>{singleToy.image}</div>
        <div>{singleToy.rating}</div>
        {singleToy.inventory === 0 ? (
          <div>OUT OF STOCK</div>
        ) : (
          <AddToCart singleToy={singleToy} addToCart={this.addToCart} />
        )}
        <div>{singleToy.review}</div>
      </div>
    )
  }
}

const mapState = state => ({
  singleToy: state.singleToy
})

const mapDispatch = dispatch => ({
  setSingleToy: id => dispatch(fetchSingleToy(id)),
  setCart: id => dispatch(setCart(id))
})

export default connect(mapState, mapDispatch)(SingleToy)
