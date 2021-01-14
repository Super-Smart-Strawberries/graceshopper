import React from 'react'
import {fetchUserInfo} from '../store/userInfo'
import {connect} from 'react-redux'

/*
NEXT STEPS:
  -get userInfo to appear in props
  -render that data on the component
*/

class SingleUser extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  render() {
    console.log('this.props: ', this.props)
    return <h1>User Information:</h1>
  }
}
const mapState = state => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatch = dispatch => {
  return {
    fetchUserInfo: id => {
      dispatch(fetchUserInfo(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleUser)
