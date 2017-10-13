/* eslint-disable linebreak-style */
/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resolveValues = [];
    // Здравствуйте, костыль. Буду очень благодарна, если подскажешь,
    // как делать нормально:)
    // Вводить каунтер - не проходит по времени
    let help = [];

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then(x => {
          // Если написать только так,
          // выйдет при первом промисе, завершившемся
          // после обхода этого цикла
          resolveValues[i] = x;
          // Если написать только так,
          // нарушится условие порядка возвращаемых значений
          help.push(x);
          if (promises.length === help.length) {
            resolve(resolveValues);
          }
        }, x => {
          reject(x);
        });
    }
  });
}

module.exports = promiseAll;
