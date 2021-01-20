import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleToy} from '../store/singleToy'
import AddToCart from './AddToCart'
import {Link} from 'react-router-dom'

class SingleToy extends Component {
  componentDidMount() {
    this.props.setSingleToy(this.props.match.params.toyId)
  }

  render() {
    const {singleToy} = this.props
    const {reviews} = singleToy
    const {isAdmin} = this.props
    return (
      <div>
        {singleToy ? (
          <div>
            <h2>{singleToy.name}</h2>
            <div>{singleToy.description}</div>
            <div>${singleToy.price}</div>
            <img src={singleToy.image} height="300" />
            <br />
            <div id="review-container">
              {reviews && reviews.length
                ? reviews.map(review => (
                    <ul key={review.id}>
                      <li>Rating: {review.ratings}</li>
                      <li>{review.description}</li>
                    </ul>
                  ))
                : ''}
            </div>

            <br />
            {singleToy.inventory === 0 ? (
              <div>OUT OF STOCK</div>
            ) : (
              <AddToCart singleToy={singleToy} />
            )}
            <br />
            {isAdmin ? <Link to={`${singleToy.id}/edit`}>Edit Toy</Link> : ''}
          </div>
        ) : (
          'Item with this id does not exist'
        )}
      </div>
    )
  }
}

const mapState = state => ({
  singleToy: state.singleToy,
  isAdmin: state.user.isAdmin
})

const mapDispatch = dispatch => ({
  setSingleToy: id => dispatch(fetchSingleToy(id))
})

export default connect(mapState, mapDispatch)(SingleToy)
