import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_REVIEWS = 'GET_REVIEWS'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getReviews = reviews => ({type: GET_REVIEWS, reviews})

/**
 * THUNK CREATORS
 */
export const fetchReviews = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/reviews')
    dispatch(getReviews(data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    default:
      return state
  }
}
