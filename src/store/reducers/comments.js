import { handleActions } from 'redux-actions'
import {
  COMMENTS_REQUEST,
  COMMENTS_COMPLETE,
  COMMENTS_FAIL,
  TOGGLE_SUB_COMMENTS
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
  [ COMMENTS_COMPLETE ]: (state, { payload }) => ({
    ...state,
    fetching: false,
    comments: payload
  }),
  [ COMMENTS_FAIL ]: (state, { payload }) => ({
    ...state,
    fetching: false,
    fetchError: payload
  }),
  // TODO: optimize the state tree for this action
  [ TOGGLE_SUB_COMMENTS ]: (state, action) => {
    // NOTE: A quick-and-dirty approach to impliment this action
    let commentId = action.payload
    let subDisplayed = true
    let affectedComments = []
    let newComments =
      state.comments.map((comment) => {
        if (comment.id === commentId) {
          // set the affected comment array to sub comments of the matched comment,
          // and toggle the comment subDisplayed field
          affectedComments = comment.kids
          subDisplayed = !comment.subDisplayed
          return {
            ...comment,
            subDisplayed
          }
        } else if ( affectedComments.indexOf(comment.id) !== -1 ) { // affectedComments.includes(comment.id)
          // add sub sub comments to affected comment array
          if (comment.kids) {
            affectedComments = [...affectedComments, ...comment.kids ]
          }
          // mutate the sub comment displayed field
          return {
            ...comment,
            displayed: subDisplayed,
            subDisplayed: subDisplayed
          }
        } else {
          return comment
        }
      })
    return {
      ...state,
      comments: newComments
    }
  }
}, initialState)
