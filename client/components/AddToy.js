import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createToy} from '../store/singleToy'
import {Link} from 'react-router-dom'

class AddToy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: '',
      image: '',
      inventory: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const newToy = await this.props.createToy(this.state)
    window.alert(`Item with ID No.${newToy.id} has been sucessfully created`)
  }

  render() {
    const toy = this.state
    return (
      <div id="add-toy">
        <Link to="/toys">Back to List of Toys</Link>
        {/* <form id="add-toy-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Toy Name:</label>
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            defaultValue={toy.name}
          />
          <br />
          <label htmlFor="description">Toy Description:</label>
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            defaultValue={toy.description}
          />
          <br />
          <label htmlFor="price">Toy Price:</label>
          <input
            name="price"
            type="number"
            onChange={this.handleChange}
            defaultValue={toy.price}
          />
          <br />
          <label htmlFor="image">Toy Image URL:</label>
          <input
            name="image"
            type="text"
            onChange={this.handleChange}
            defaultValue={toy.image}
          />
          <br />
          <label htmlFor="image">Toy Inventory:</label>
          <input
            name="inventory"
            type="number"
            onChange={this.handleChange}
            defaultValue={toy.inventory}
          />
          <br />
          <button type="submit" id="create-btn">
            Add new product
          </button>
        </form> */}
      </div>
    )
  }
}

// const mapState = (state) => {
//   return {
//     singleToy: state.singleToy,
//   }
// }

const mapDispatch = dispatch => ({
  addToy: () => dispatch(createToy())
  // updateToy: (id, toy) => dispatch(editToy(id, toy)),
})

export default connect(null, mapDispatch)(AddToy)
