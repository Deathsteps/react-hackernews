import createMockDispatch from '../createMockDispatch'
import { STORIES_REQUEST, STORIES_COMPLETE, STORIES_FAIL } from '../actionTypes'
import { fetchTopStories } from '../actions/stories'
import storyReducer from '../reducers/stories'

// For more information about jest mock, see:
// http://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest#answer-40465435
// https://facebook.github.io/jest/docs/manual-mocks.html
import '../api'
jest.mock('../api', () => ({
  getTopStories: jest.fn(() => {
    return new Promise(function(resolve) {
      setTimeout(() => {
        // Not allowed to reference any out-of-scope variables
        // see https://github.com/facebook/jest/issues/2567
        resolve(require('./mockData/stories.raw.json'))
      }, 300)
    });
  })
}))

const EXPECTED_STORIES = require('./mockData/stories.expected.json')

describe('Stories actions and reducers works', () => {
  describe('actions', () => {
    test('fetchTopStories', done => {
      const dispatch = createMockDispatch([
        { type: STORIES_REQUEST },
        { type: STORIES_COMPLETE, payload: EXPECTED_STORIES }
      ], done)
      dispatch(fetchTopStories())
    })

    afterAll(() => {
      // unmock api module
      jest.unmock('../api')
    })
  })

  describe('reducers', () => {
    test('initial state', () => {
      expect(storyReducer(undefined, {}))
        .toEqual({
          fetching: false,
          stories: null,
          fetchError: null
        })
    })

    test('stories fetching related', () => {
      let requestState, state
      requestState = storyReducer(undefined, { type: STORIES_REQUEST })
      expect(requestState).toEqual({
        fetching: true,
        stories: null,
        fetchError: null
      })

      state = storyReducer(requestState, { type: STORIES_COMPLETE, payload: [{ test: 1 }] })
      expect(state).toEqual({
        fetching: false,
        stories: [{ test: 1 }],
        fetchError: null
      })

      let error = new Error('Test')
      state = storyReducer(requestState, { type: STORIES_FAIL, payload: error })
      expect(state).toEqual({
        fetching: false,
        stories: null,
        fetchError: error
      })
    })
  })
})
