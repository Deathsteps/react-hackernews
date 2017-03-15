import { createAction } from 'redux-actions'
import createThunkAction from './createThunkAction'
import { TOGGLE_SUB_COMMENTS } from '../actionTypes'
import { getStoryComments } from '../api'
import formatTime from '../utilities/formatTime'

export const fetchStoryComments = createThunkAction(
  'COMMENTS',
  getStoryComments,
  {
    complete:
      data =>
        data.map((item) => {
          return {
            ...item,
            timeText: formatTime(item.time * 1000),
            subDisplayed: true, // whether sub comments is displayed
            displayed: true
          }
        })
  }
)

export const toggleSubComments =
  createAction(TOGGLE_SUB_COMMENTS, commentId => commentId )
