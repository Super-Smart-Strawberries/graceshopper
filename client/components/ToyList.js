import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchToys} from '../store/toys'

class ToyList extends Component {
  componentDidMount() {
    this.props.getToys()
  }

  render() {
    const {toys} = this.props
    const {isAdmin} = this.props
    return (
      <div>
        <ul className="toy-list">
          {isAdmin ? <Link to="/toys/add">Add New Product</Link> : ''}

          {toys === undefined ? (
            <h3>Loading Toys...</h3>
          ) : toys.length ? (
            toys.map(toy => (
              <li className="toy-list-item" key={toy.id}>
                <div>
                  <img src={toy.image} height="100" />
                </div>
                <div>
                  <Link to={`/toys/${toy.id}`}>{toy.name}</Link>
                </div>
              </li>
            ))
          ) : (
            <h3>No Toys Available!</h3>
          )}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    toys: state.toys,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    getToys: () => dispatch(fetchToys())
  }
}

export default connect(mapState, mapDispatch)(ToyList)
