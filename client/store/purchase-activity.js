import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_ACTIVITY = 'GET_ACTIVITY'
const GET_SINGLE_ACTIVITY = 'GET_SINGLE_ACTIVITY'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getActivity = activity => ({type: GET_ACTIVITY, activity})
const getSingleActivity = singleActivity => ({
  type: GET_SINGLE_ACTIVITY,
  singleActivity
})

/**
 * THUNK CREATORS
 */
export const fetchActivity = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/purchase-activity')
    dispatch(getActivity(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchSingleActivity = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/purchase-activity/${id}`)
    dispatch(getSingleActivity(data))
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
    case GET_SINGLE_ACTIVITY:
      return action.singleActivity
    default:
      return state
  }
}
