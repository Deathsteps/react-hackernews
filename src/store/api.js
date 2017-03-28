import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}
const version = '/v0'

Firebase.initializeApp(config)
const api = Firebase.database().ref(version)

function fetchData(path) {
  return new Promise((resolve, reject) => {
    api.child(path).once('value', snapshot => {
      const val = snapshot.val()
      resolve(val)
    }, reject)
  })
}

function fetchItem(id) {
  return fetchData('item/' + id)
}

function fetchItems(ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function test() {
  fetchItems()
}

/*-------------Exports----------------*/

export const getTopStories = () => {
  return new Promise(function(resolve/*, reject*/) {
    // setTimeout(() => reject(new Error('Bad Network')), 200)
    // fetchData('topstories').then(
    //   ids => fetchItems(ids.slice(0, 30)).then(resolve, reject),
    //   reject
    // )
    setTimeout(() => {
      resolve(require('./__tests__/mockData/stories.raw.json'))
    }, 500)
  })
}

export const getStoryComments = () => {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(require('./__tests__/mockData/comments.raw.json'))
    }, 500)
  });
  // return fetchItems()
}

export const getUser = () => {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(require('./__tests__/mockData/user.raw.json'))
    }, 500)
  });
}
