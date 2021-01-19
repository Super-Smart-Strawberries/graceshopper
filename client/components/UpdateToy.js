import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteToy, fetchSingleToy, editToy} from '../store/singleToy'
import {Link} from 'react-router-dom'

class UpdateToy extends Component {
  constructor(props) {
    super(props)
    const toy = this.props.singleToy
    this.state = {
      name: toy.name,
      description: toy.description,
      price: toy.price,
      image: toy.image,
      inventory: toy.inventory
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const {toyId} = this.props.match.params
    this.props.setSingleToy(toyId)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const id = this.props.singleToy.id
    this.props.updateToy(id, this.state)
  }

  handleDelete(toyId) {
    this.props.removeToy(toyId)
  }

  render() {
    const toy = this.props.singleToy
    return (
      <div>
        {toy.id ? (
          <div>
            <div>
              <Link to={`/toys/${toy.id}`}>Back to Toy</Link>
            </div>
            <div id="update-toy">
              <form id="update-toy-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Toy Name:</label>
                <input
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={toy.name}
                />
                <br />
                <input
                  name="description"
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={toy.description}
                />
                <br />
                <input
                  name="price"
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={toy.price}
                />
                <br />
                <input
                  name="image"
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={toy.image}
                />
                <br />
                <input
                  name="inventory"
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={toy.inventory}
                />
                <br />
                <button type="submit" id="update-btn">
                  Update
                </button>
              </form>
            </div>
            <div>
              <button
                type="submit"
                id="delete-btn"
                onClick={() => this.handleDelete(toy.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          'This item has been permanently deleted'
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleToy: state.singleToy
  }
}

const mapDispatch = dispatch => ({
  removeToy: toyId => dispatch(deleteToy(toyId)),
  setSingleToy: toyId => dispatch(fetchSingleToy(toyId)),
  updateToy: (id, toy) => dispatch(editToy(id, toy))
})

export default connect(mapState, mapDispatch)(UpdateToy)
