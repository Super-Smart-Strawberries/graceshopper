import axios from 'axios'
/**
 * ACTION TYPES
 */ const GET_ACTIVITY = 'GET_ACTIVITY'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getActivity = activity => ({type: GET_ACTIVITY, activity})

/**
 * THUNK CREATORS
 */
export const fetchActivity = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/purchaseActivity')
    dispatch(getActivity(data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITY:
      return action.activity
    default:
      return state
  }
}
