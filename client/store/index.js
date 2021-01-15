import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'

import toys from './toys'
import activity from './purchase-activity'
import singleToy from './singleToy'

const reducer = combineReducers({user, toys, singleToy, activity})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './purchase-activity'
export * from './toys'
export * from './singleToy'
