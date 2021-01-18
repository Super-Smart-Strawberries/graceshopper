import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleToy} from '../store/singleToy'
import AddToCart from './AddToCart'
import UpdateToy from './UpdateToy'

class SingleToy extends Component {
  componentDidMount() {
    this.props.setSingleToy(this.props.match.params.toyId)
  }

  render() {
    const {singleToy} = this.props
    const {reviews} = singleToy
    console.log('this.props from SingleToy: ', this.props) // to be deleted
    return (
      <div>
        <h2>{singleToy.name}</h2>
        <div>{singleToy.description}</div>
        <div>${singleToy.price}</div>
        <img src={singleToy.image} />
        {reviews
          ? reviews.map(review => (
              <ul key={review.id}>
                <li>Rating: {review.ratings}</li>
                <li>{review.description}</li>
              </ul>
            ))
          : null}
        {singleToy.inventory === 0 ? (
          <div>OUT OF STOCK</div>
        ) : (
          <AddToCart singleToy={singleToy} />
        )}
        {<UpdateToy toy={singleToy} />}
      </div>
    )
  }
}

const mapState = state => ({
  singleToy: state.singleToy
})

const mapDispatch = dispatch => ({
  setSingleToy: id => dispatch(fetchSingleToy(id))
})

export default connect(mapState, mapDispatch)(SingleToy)
