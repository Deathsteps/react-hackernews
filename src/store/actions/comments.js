import createThunkAction from './createThunkAction'
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
            timeText: formatTime(item.time * 1000)
          }
        })
  }
)
