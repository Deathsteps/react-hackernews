import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import App from './App'
import './index.css'

let store = createStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
