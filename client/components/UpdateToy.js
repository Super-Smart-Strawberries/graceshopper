import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import deleteToy from '../store/singleToy'

class UpdateToy extends React.Component {
  constructor(props) {
    super(props)
    //let toy = this.props.singleToy
    //console.log('state in UpdateToy: ', this.state)
    this.state = {
      name: this.props.toy.name,
      description: this.props.toy.description,
      price: this.props.toy.price,
      image: this.props.toy.image,
      inventory: this.props.toy.inventory
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.setState({
      name: this.props.toy.name,
      description: this.props.toy.description,
      price: this.props.toy.price,
      image: this.props.toy.image,
      inventory: this.props.toy.inventory
    })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const toyId = this.props.toy.id
    try {
      const res = await axios.put(`/api/toys/${toyId}`, this.state)
      this.props.UpdateToy(res.data)
    } catch (err) {
      console.log('unable to update toy: ', err)
    }
  }

  async handleDelete(toyId) {
    try {
      await axios.delete(`/api/toys/${toyId}`)
      this.props.deleteToy(toyId)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div id="update-toy">
        <form id="update-toy-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Toy Name:</label>
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.props.toy.name}
          />
          <br />
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.props.toy.description}
          />
          <br />
          <input
            name="price"
            type="number"
            onChange={this.handleChange}
            defaultValue={this.props.toy.price}
          />
          <br />
          <input
            name="image"
            type="text"
            onChange={this.handleChange}
            defaultValue={this.props.toy.image}
          />
          <br />
          <input
            name="inventory"
            type="number"
            onChange={this.handleChange}
            defaultValue={this.props.toy.inventory}
          />
          <br />
          <button type="submit" id="update-btn">
            Submit
          </button>
          <button
            type="submit"
            id="delete-btn"
            onClick={() => this.handleDelete(this.props.toy.id)}
          >
            Delete
          </button>
        </form>
      </div>
    )
  }
}

// const mapState = (state) => {
//   return {
//     toy: state.toy,
//   }
// }

const mapDispatch = dispatch => ({
  removeToy: toyId => dispatch(deleteToy(toyId))
})

export default connect(null, mapDispatch)(UpdateToy)
