import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'

export default function () {
  return createStore(
    combineReducers(reducers),
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )
}
