import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_TOYS = 'GET_TOYS'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getToys = toys => {
  return {
    type: GET_TOYS,
    toys
  }
}

/**
 * THUNK CREATORS
 */
export const fetchToys = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/toys')
    dispatch(getToys(data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function toysReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOYS:
      return action.toys
    default:
      return state
  }
}
