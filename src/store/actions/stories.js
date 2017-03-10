import createThunkAction from './createThunkAction'
import { getTopStories } from '../api'

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

function timeText(num, unit) {
  return num + ' ' + unit + (num > 1 ? 's' : '') + ' ago'
}
function formatTime(timestamp) {
  let now = Date.now()
  let diff = now - timestamp
  let minutes = Math.floor(diff / ( 1000 * 60 ))
  let hours = Math.floor(minutes / 60)
  let days = Math.floor(hours / 24)
  let months = Math.floor(days / 30)
  let years = Math.floor(months / 12)
  return years ? timeText(years, 'year') :
    months ? timeText(months, 'month') :
    days ? timeText(days, 'day') :
    hours ? timeText(hours, 'hour') :
    minutes ? timeText(minutes, 'minute') : 'few seconds ago'
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
