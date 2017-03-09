import createThunkAction from './createThunkAction'
import { getTopStories } from '../api'


export const fetchTopStories = createThunkAction('STORIES', getTopStories)
