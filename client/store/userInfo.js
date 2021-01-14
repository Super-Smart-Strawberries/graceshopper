import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USER_INFO = 'GET_USER_INFO'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getUserInfo = user => {
  return {
    type: GET_USER_INFO,
    user
  }
}

/**
 * THUNK CREATORS
 */
export const fetchUserInfo = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${id}`)
    dispatch(getUserInfo(data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function userInfoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return action.user
    default:
      return state
  }
}
