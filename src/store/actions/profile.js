import createThunkAction from './createThunkAction'
import { getUser } from '../api'
import formatTime from '../utilities/formatTime'

export const fetchUser = createThunkAction(
  'USER',
  getUser,
  {
    complete:
      data => ({
        ...data,
        createdText: formatTime(data.created)
      })
  }
)
