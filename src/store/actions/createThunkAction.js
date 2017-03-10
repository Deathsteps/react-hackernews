
function buildCallback(dispatch, actionName, args, playloadCreator) {
  return function (err, value) {
    if (err) {
      buildFailFunction(dispatch, actionName, args, playloadCreator.fail)(err)
    } else {
      buildCompleteFunction(dispatch, actionName, args, playloadCreator.complete)(value)
    }
  }
}

function buildCompleteFunction(dispatch, actionName, args, playloadCreator) {
  return function (value) {
    dispatch({
      type: actionName + '_COMPLETE',
      playload: playloadCreator.apply(null, [value, ...args])
    })
  }
}

function buildFailFunction(dispatch, actionName, args, playloadCreator) {
  return function (value) {
    dispatch({
      type: actionName + '_FAIL',
      playload: playloadCreator.apply(null, [value, ...args]),
      error: true
    })
  }
}

const defaultPlayloadCreator = {
  request: () => undefined,
  complete: value => value,
  fail: err => err,
}

/**
 * 创建异步Action
 * @param  {String} actionName 动作名
 * @param  {asyncMethod} asyncMethod 异步函数
 * （nodejs callback style function or a function return a promise  ）
 * @param  {Object} playloadCreator playload构造器
 * @param  {Function} playloadCreator.request 请求开始payload构造函数 params => {}
 * @param  {Function} playloadCreator.complete 请求完成payload构造函数 (result, params) => {}
 * @param  {Function} playloadCreator.fail 请求失败payload构造函数 (err, params) => {}
 * @return {Function}             actionCreator
 */
export default function (
  actionName,
  asyncMethod,
  playloadCreator = defaultPlayloadCreator
) {
  return function (...args) {
    return dispatch => {
      // dispatch request action
      dispatch({
        type: actionName + '_REQUEST',
        playload: playloadCreator.request.apply(null, args)
      })
      // invoke the async method
      let newArgs = [ ...args, buildCallback(dispatch, actionName, args, playloadCreator)]
      let promise = asyncMethod.apply(null, newArgs)
      // deal with promise
      if (promise && promise.then) {
        promise.then(
          buildCompleteFunction(dispatch, actionName, args, playloadCreator.complete),
          buildFailFunction(dispatch, actionName, args, playloadCreator.fail)
        )
      }
    }
  }
}
