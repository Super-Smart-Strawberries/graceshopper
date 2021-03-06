import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_ACTIVITY = 'GET_ACTIVITY'
const GET_SINGLE_ACTIVITY = 'GET_SINGLE_ACTIVITY'
const UPDATE_ORDER_ITEM = 'UPDATE_ORDER_ITEM'
const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM'
const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM'
const PURCHASE_ITEMS = 'PURCHASE_ITEMS'
const CONFIRM_ORDER = 'CONFIRM_ORDER'
/**
 * INITIAL STATE
 */
const initialState = {orderItems: []}

/**
 * ACTION CREATORS
 */
const getActivity = activity => ({type: GET_ACTIVITY, activity})

const getSingleActivity = singleActivity => ({
  type: GET_SINGLE_ACTIVITY,
  singleActivity
})
const addOrderItem = orderItem => ({type: ADD_ORDER_ITEM, orderItem})

const updatedOrderItem = (qty, id) => ({
  type: UPDATE_ORDER_ITEM,
  qty,
  id
})

const removedOrderItem = id => ({
  type: REMOVE_ORDER_ITEM,
  id
})

const orderedActivity = id => ({
  type: PURCHASE_ITEMS,
  id
})

const confirmedOrder = order => ({
  type: CONFIRM_ORDER,
  order
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
    dispatch(updatedOrderItem(data.quantity, orderItemId))
  } catch (err) {
    console.log(err)
  }
}

export const removeOrderItem = id => async dispatch => {
  try {
    await axios.delete(`/api/order-item/delete/${id}`)
    dispatch(removedOrderItem(id))
  } catch (error) {
    console.log(error)
  }
}

export const postOrderItem = (id, orderItem) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/toys/${id}`, orderItem)
    dispatch(addOrderItem(data))
  } catch (error) {
    console.log(error)
  }
}

export const orderActivity = id => async dispatch => {
  try {
    await axios.put(`/api/purchase-activity/${id}`)
    dispatch(orderedActivity(id))
  } catch (error) {
    console.log(error)
  }
}

export const confirmOrder = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/order-history/${id}`)
    dispatch(confirmedOrder(data))
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
    case UPDATE_ORDER_ITEM:
      return {
        ...state,
        orderItems: state.orderItems.map(
          item =>
            item.id === action.id ? {...item, quantity: action.qty} : item
        )
      }
    case REMOVE_ORDER_ITEM:
      return {
        ...state,
        orderItems: state.orderItems.filter(item => item.id !== action.id)
      }
    case ADD_ORDER_ITEM:
      return action.orderItem
    case PURCHASE_ITEMS:
      return {...state, isOrdered: !state.isOrdered}
    case CONFIRM_ORDER:
      return action.order
    default:
      return state
  }
}
