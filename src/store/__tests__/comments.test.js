import createMockDispatch from '../createMockDispatch'
import { fetchStoryComments, toggleSubComments } from '../actions/comments'
import commentReducer from '../reducers/comments'
import {
  COMMENTS_REQUEST,
  COMMENTS_COMPLETE,
  COMMENTS_FAIL,
  TOGGLE_SUB_COMMENTS
} from '../actionTypes'

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
        { type: COMMENTS_REQUEST },
        { type: COMMENTS_COMPLETE, payload: EXPECTED_COMMENTS },
      ], done)
      dispatch(fetchStoryComments())
    })

    test('toggleSubComments', done => {
      const dispatch = createMockDispatch([
        { type: TOGGLE_SUB_COMMENTS, payload: 1 }
      ], done)
      dispatch(toggleSubComments(1))
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

    test('deal with sub comments toggling', () => {
      let state = {
        fetching: false,
        comments: EXPECTED_COMMENTS,
        fetchError: null
      }
      let result = commentReducer(state, { type: TOGGLE_SUB_COMMENTS, payload: 2922097 })
      expect(result.fetching).toBe(false)
      expect(result.fetchError).toBeNull()
      result.comments.forEach((item, i) => {
        if (i === 2 || i === 3) {
          expect(item.displayed).toBe(false);
          expect(item.subDisplayed).toBe(false);
        }
        else if (i === 1) {
          expect(item.displayed).toBe(true);
          expect(item.subDisplayed).toBe(false);
        }
        else {
          expect(item.displayed).toBe(true);
          expect(item.subDisplayed).toBe(true);
        }
      })
    })
  })
})
