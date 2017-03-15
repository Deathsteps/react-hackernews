import createMockDispatch from '../createMockDispatch'
import { fetchStoryComments } from '../actions/comments'
import { COMMENTS_REQUEST, COMMENTS_COMPLETE, COMMENTS_FAIL } from '../actionTypes'
import commentReducer from '../reducers/comments'

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
        { type: 'COMMENTS_COMPLETE', payload: EXPECTED_COMMENTS },
      ], done)
      dispatch(fetchStoryComments())
    })

    afterAll(() => {
      jest.unmock('../api')
    })
  })

  describe('reducers', () => {
    test('initial state', () => {
      expect(commentReducer(undefined, {}))
        .toEqual({
          fetching: false,
          comments: null,
          fetchError: null
        })
    })

    test('comments fetching related', () => {
      let requestState, state
      requestState = commentReducer(undefined, { type: COMMENTS_REQUEST })
      expect(requestState).toEqual({
        fetching: true,
        comments: null,
        fetchError: null
      })

      state = commentReducer(requestState, { type: COMMENTS_COMPLETE, payload: [{ test: 1 }] })
      expect(state).toEqual({
        fetching: false,
        comments: [{ test: 1 }],
        fetchError: null
      })

      let error = new Error('Test')
      state = commentReducer(requestState, { type: COMMENTS_FAIL, payload: error })
      expect(state).toEqual({
        fetching: false,
        comments: null,
        fetchError: error
      })
    })
  })
})
