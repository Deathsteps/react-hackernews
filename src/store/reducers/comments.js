import { handleActions } from 'redux-actions'
import {
  COMMENTS_REQUEST,
  COMMENTS_COMPLETE,
  COMMENTS_FAIL
} from '../actionTypes'

const initialState = {
  fetching: false,
  comments: null,
  fetchError: null
}

export default handleActions({
  [ COMMENTS_REQUEST ]: state => ({
    ...state,
    fetching: true
  }),
  [ COMMENTS_COMPLETE ]: (state, action) => ({
    ...state,
    fetching: false,
    comments: action.playload
  }),
  [ COMMENTS_FAIL ]: (state, action) => ({
    ...state,
    fetching: false,
    fetchError: action.playload
  })
}, initialState)
