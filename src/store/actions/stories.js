import createThunkAction from './createThunkAction'
import { getTopStories } from '../api'
import formatTime from '../utilities/formatTime'

function parseSourceFormUrl (url) {
  let reg = /\w+:\/\/([^\/]+)/
  let matches = url.match(reg)
  if (matches) {
    return {
      source: matches[1].replace('www.', ''),
      sourceUrl: matches[0]
    }
  } else {
    return {
      source: 'unknown',
      sourceUrl: '#'
    }
  }
}

export const fetchTopStories = createThunkAction(
  'STORIES',
  getTopStories,
  { // add extra information to raw data
    complete: data =>
      data.filter(item => item.type === 'story')
        .map(item => ({
          ...item,
          ...parseSourceFormUrl(item.url || ''),
          // story time is an unix time
          timeText: formatTime(item.time * 1000)
        })
      )
  }
)
