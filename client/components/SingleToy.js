import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleToy} from '../store/singleToy'

class SingleToy extends Component {
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
        {singleToy.inventory < 10 ? (
          <div>LOW IN STOCK! HURRY AND BUY BEFORE IT'S OUT! </div>
        ) : null}
        <div>{singleToy.review}</div>
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
