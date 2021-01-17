import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_ACTIVITY = 'GET_ACTIVITY'
const GET_SINGLE_ACTIVITY = 'GET_SINGLE_ACTIVITY'
const UPDATE_ORDER_ITEM = 'UPDATE_ORDER_ITEM'

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

const updatedOrderItem = update => ({
  type: UPDATE_ORDER_ITEM,
  update
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

export const updateOrderItem = (orderItemId, update) => async dispatch => {
  try {
    const {data} = await axios.put(
      `/api/order-item/update/${orderItemId}`,
      update
    )
    dispatch(updatedOrderItem(data))
  } catch (err) {
    console.log(err)
  }
}
/**
 * REDUCER
 */
export default function activityReducer(state = initialState, action) {
  let updatedOrders
  switch (action.type) {
    case GET_ACTIVITY:
      return action.activity
    case GET_SINGLE_ACTIVITY:
      return action.singleActivity
    case UPDATE_ORDER_ITEM:
      updatedOrders = state.orderItems.map(item => {
        if (item.id === action.id) {
          return action.update
        } else {
          return item
        }
      })
      return {...state, orderItems: updatedOrders}
    default:
      return state
  }
}
