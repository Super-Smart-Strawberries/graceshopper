const SET_CART = 'SET_CART'

export const setCart = toy => {
  return {
    type: setCart,
    toy
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case SET_CART:
      return [...state, action.toy]
    default:
      return state
  }
}
