function timeText(num, unit) {
  return num + ' ' + unit + (num > 1 ? 's' : '') + ' ago'
}

export default function(timestamp) {
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
