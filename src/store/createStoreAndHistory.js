import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'

export default function () {
  const history = createHistory()
  let store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
      createLogger()
    )
  )
  return { store, history }
}
