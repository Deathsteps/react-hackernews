import createMockDispatch from '../createMockDispatch'
import { fetchStoryComments } from '../actions/comments'

import '../api'
jest.mock('../api', () => ({
  getStoryComments: jest.fn(() => {
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve(require('./mockData/comments.raw.json'))
      }, 200)
    });
  })
}))

const EXPECTED_COMMENTS = require('./mockData/comments.expected.json')

describe('Comments actions and reducers works', () => {
  describe('actions', () => {
    test('fetchStoryComments', done => {
      const dispatch = createMockDispatch([
        { type: 'COMMENTS_REQUEST' },
        { type: 'COMMENTS_COMPLETE', playload: EXPECTED_COMMENTS },
      ], done)
      dispatch(fetchStoryComments())
    })

    afterAll(() => {
      jest.unmock('../api')
    })
  })
})
