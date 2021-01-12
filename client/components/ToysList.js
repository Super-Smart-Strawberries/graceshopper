import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchToys} from '../store/toys'

class ToyList extends Component {
  componentDidMount() {
    this.props.getToys()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.toys.map((toy) => (
            <div key={toy.id}>
              <Link to={`toys/${toy.id}`}>
                <h4>{toy.name}</h4>
              </Link>
              <div>
                <img src={toy.image} />
              </div>
              <div>{toy.description}</div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toys: state.toys,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getToys: () => dispatch(fetchToys()),
  }
}

export default connect(mapStateToProps, mapDispatch)(ToyList)
