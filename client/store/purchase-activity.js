import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_ACTIVITY = 'GET_ACTIVITY'
const GET_SINGLE_ACTIVITY = 'GET_SINGLE_ACTIVITY'
const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM'

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
const addOrderItem = orderItem => ({type: ADD_ORDER_ITEM, orderItem})

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

export const postOrderItem = orderItem => async dispatch => {
  try {
    const {data} = await axios.post(`/api/purchase-activity`, orderItem)
    dispatch(addOrderItem(data))
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
    case ADD_ORDER_ITEM:
      return action.orderItem
    default:
      return state
  }
}
