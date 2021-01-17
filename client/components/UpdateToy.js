import React from 'react'
import axios from 'axios'

export default class UpdateToy extends React.Component {
  constructor() {
    super()
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

  render() {
    return (
      <div id="update-toy">
        <form id="update-toy-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Toy Name:</label>
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.props.toy.name}
          />
          <br />
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            value={this.props.toy.description}
          />
          <br />
          <input
            name="price"
            type="number"
            onChange={this.handleChange}
            value={this.props.toy.price}
          />
          <br />
          <input
            name="image"
            type="text"
            onChange={this.handleChange}
            value={this.props.toy.image}
          />
          <br />
          <input
            name="inventory"
            type="number"
            onChange={this.handleChange}
            value={this.props.toy.inventory}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
