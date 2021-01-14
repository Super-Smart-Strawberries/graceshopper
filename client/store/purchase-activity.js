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
const getActivity = activity => ({type: GET_QUANTITY, activity})

/**
 * THUNK CREATORS
 */
export const fetchActivity = () => async disptach => {
  try {
    const {data} = await axios.get('/api/purchaseActivity')
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
