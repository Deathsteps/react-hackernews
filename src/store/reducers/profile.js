import { handleActions } from 'redux-actions'
import {
  USER_REQUEST,
  USER_COMPLETE,
  USER_FAIL
} from '../actionTypes'

const initialState = {
  fetching: false,
  user: null,
  fetchError: null
}

export default handleActions({
  [ USER_REQUEST ]: state => ({
    ...state,
    fetching: true
  }),
  [ USER_COMPLETE ]: (state, { payload }) => ({
    ...state,
    fetching: false,
    user: payload
  }),
  [ USER_FAIL ]: (state, { payload }) => ({
    ...state,
    fetching: false,
    fetchError: payload
  }),
}, initialState)
