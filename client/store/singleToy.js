import axios from 'axios'

const SET_SINGLE_TOY = 'SET_SINGLE_TOY'

const setSingleToy = toy => {
  return {
    type: SET_SINGLE_TOY,
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

const initialState = {}

export default function singleToyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_TOY:
      return action.toy
    default:
      return state
  }
}
