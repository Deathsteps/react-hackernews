/**
 * Create a redux dispatch to test whether the passed actions are expected
 * @param  {Array}   expectedActions expected actions
 * @param  {Function} done            test complete function
 * @return {Function}                   the mock dispatch
 */
export default (expectedActions, done) => {
  let mockDispatch = action => {
    if (typeof action === 'function') {
      // deal with thunk action
      action(mockDispatch)
    } else {
      let expected = expectedActions.shift()
      expect(action).toEqual(expected)
      if (!expectedActions.length) {
        done()
      }
    }
  }
  return mockDispatch
}
