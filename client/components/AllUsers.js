import React from 'react'
import {fetchUsers} from '../store/users'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AllUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const {users} = this.props
    return (
      <div id="user-directory">
        <h1>User Directory:</h1>
        {users &&
          users.map(user => (
            <div className="single-user" key={user.id}>
              <Link to={`/users/${user.id}`}>
                <p>{user.id}</p>
                <p>{user.email}</p>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
