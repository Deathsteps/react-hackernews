import { handleActions } from 'redux-actions'
import {
  STORIES_REQUEST,
  STORIES_COMPLETE,
  STORIES_FAIL
} from '../actionTypes'

const initialState = {
  fetching: false,
  stories: null,
  fetchError: null
}

export default handleActions({
  [ STORIES_REQUEST ]: state => ({
    ...state,
    fetching: true
  }),
  [ STORIES_COMPLETE ]: (state, action) => ({
    ...state,
    fetching: false,
    stories: action.playload
  }),
  [ STORIES_FAIL ]: (state, action) => ({
    ...state,
    fetching: false,
    fetchError: action.playload
  })
}, initialState)
