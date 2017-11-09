/* eslint-disable linebreak-style */

/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function throttle(time, callback) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function setPause(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    callback.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        setPause.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, time);
  }

  return setPause;
}


module.exports = { throttle };
