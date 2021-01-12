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
const getToys = (toys) => ({type: GET_TOY, toys})

/**
 * THUNK CREATORS
 */
export const fetchToys = () => async (dispatch) => {
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
