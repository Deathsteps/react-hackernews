import createThunkAction from '../actions/createThunkAction'
import createMockDispatch from '../createMockDispatch'

describe('createThunkAction works', () => {
  describe('default playloadCreator', () => {
    test('node-callback-style function', done => {
      const successFunction = function (callback) {
        callback(null, 1)
      }
      const successAction = createThunkAction('SUCCESS_TEST', successFunction)
      const dispatchA = createMockDispatch([
        { type: 'SUCCESS_TEST_REQUEST', playload: undefined },
        { type: 'SUCCESS_TEST_COMPLETE', playload: 1 }
      ], done)
      dispatchA(successAction())

      const err = new Error()
      const failureFunction = function (callback) {
        callback(err)
      }
      const failureAction = createThunkAction('FAILURE_TEST', failureFunction)
      const dispatchB = createMockDispatch([
        { type: 'FAILURE_TEST_REQUEST', playload: undefined },
        { type: 'FAILURE_TEST_FAIL', playload: err, error: true }
      ], done)
      dispatchB(failureAction())
    })

    test('promise function', done => {
      const successFunction = function () {
        return new Promise(function(resolve) {
          resolve(1)
        });
      }
      const successAction = createThunkAction('SUCCESS_TEST', successFunction)
      const dispatchA = createMockDispatch([
        { type: 'SUCCESS_TEST_REQUEST', playload: undefined },
        { type: 'SUCCESS_TEST_COMPLETE', playload: 1 }
      ], done)
      dispatchA(successAction())

      const err = new Error()
      const failureFunction = function () {
        return new Promise(function(resolve, reject) {
          reject(err)
        });
      }
      const failureAction = createThunkAction('FAILURE_TEST', failureFunction)
      const dispatchB = createMockDispatch([
        { type: 'FAILURE_TEST_REQUEST', playload: undefined },
        { type: 'FAILURE_TEST_FAIL', playload: err, error: true }
      ], done)
      dispatchB(failureAction())
    })
  })

  describe('action parameters', () => {
    test('node-callback-style function', done => {
      const asyncAdd = function (p1, p2, callback) {
        callback(null, { result: p1 + p2 })
      }
      const action = createThunkAction('TEST', asyncAdd)
      const dispatch = createMockDispatch([
        { type: 'TEST_REQUEST', playload: undefined },
        { type: 'TEST_COMPLETE', playload: { result: 3 } }
      ], done)
      dispatch(action(1, 2))
    })

    test('promise function', done => {
      const asyncAdd = function (p1, p2) {
        return new Promise(function(resolve) {
          resolve({ result: p1 + p2 })
        });
      }
      const action = createThunkAction('TEST', asyncAdd)
      const dispatch = createMockDispatch([
        { type: 'TEST_REQUEST', playload: undefined },
        { type: 'TEST_COMPLETE', playload: { result: 3 } }
      ], done)
      dispatch(action(1, 2))
    })
  })

  describe('custom playloadCreator', () => {
    test('node-callback-style function', done => {
      const args = [1, 2, 3]
      const data = 4
      const successFunction = function (p1, p2, p3, callback) {
        callback(null, data)
      }
      const successAction = createThunkAction(
        'SUCCESS_TEST',
        successFunction,
        { // playloadCreator
          request: (p1, p2, p3) => p1 + p2 + p3,
          complete: (result, p1, p2, p3) => (result + p1 + p2 + p3)
        }
      )
      const dispatchA = createMockDispatch([
        { type: 'SUCCESS_TEST_REQUEST', playload: 6 },
        { type: 'SUCCESS_TEST_COMPLETE', playload: 10 }
      ], done)
      dispatchA(successAction.apply(null, args))

      const err = new Error(data)
      const failureFunction = function (p1, p2, p3, callback) {
        callback(err)
      }
      const failureAction = createThunkAction(
        'FAILURE_TEST',
        failureFunction,
        { // playloadCreator
          request: (p1, p2, p3) => p3 - p1 - p2,
          fail: (e, p1, p2, p3) => (e.message + p3)
        }
      )
      const dispatchB = createMockDispatch([
        { type: 'FAILURE_TEST_REQUEST', playload: 0 },
        { type: 'FAILURE_TEST_FAIL', playload: 7, error: true }
      ], done)
      dispatchB(failureAction.apply(null, args))
    })

    test('promise function', done => {
      const args = [1, 2, 3]
      const data = 4
      const successFunction = function (/* p1, p2, p3 */) {
        return new Promise(function(resolve) {
          resolve(data)
        });
      }
      const successAction = createThunkAction(
        'SUCCESS_TEST',
        successFunction,
        { // playloadCreator
          request: (p1, p2, p3) => p1 + p2 + p3,
          complete: (result, p1, p2, p3) => (result + p1 + p2 + p3)
        }
      )
      const dispatchA = createMockDispatch([
        { type: 'SUCCESS_TEST_REQUEST', playload: 6 },
        { type: 'SUCCESS_TEST_COMPLETE', playload: 10 }
      ], done)
      dispatchA(successAction.apply(null, args))

      const err = new Error(data)
      const failureFunction = function (/* p1, p2, p3 */) {
        return new Promise(function(resolve, reject) {
          reject(err)
        });
      }
      const failureAction = createThunkAction(
        'FAILURE_TEST',
        failureFunction,
        { // playloadCreator
          request: (p1, p2, p3) => p3 - p1 - p2,
          fail: (e, p1, p2, p3) => (e.message + p3)
        }
      )
      const dispatchB = createMockDispatch([
        { type: 'FAILURE_TEST_REQUEST', playload: 0 },
        { type: 'FAILURE_TEST_FAIL', playload: 7, error: true }
      ], done)
      dispatchB(failureAction.apply(null, args))
    })
  })
})
