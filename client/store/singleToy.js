import axios from 'axios'

const SET_SINGLE_TOY = 'SET_SINGLE_TOY'
const DELETE_TOY = 'DELETE_TOY'
const EDIT_TOY = 'EDIT_TOY'

const setSingleToy = toy => {
  return {
    type: SET_SINGLE_TOY,
    toy
  }
}

const deletedToy = id => {
  return {
    type: DELETE_TOY,
    id
  }
}

const editedToy = toy => {
  return {
    type: EDIT_TOY,
    toy
  }
}

export const fetchSingleToy = toyId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/toys/${toyId}`)
      dispatch(setSingleToy(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteToy = id => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/toys/${id}`)
      dispatch(deletedToy(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const editToy = (id, toy) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/toys/${id}`, toy)
      dispatch(editedToy(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = {}

export default function singleToyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_TOY:
      return action.toy
    case DELETE_TOY:
      return initialState
    case EDIT_TOY:
      return action.toy
    default:
      return state
  }
}
