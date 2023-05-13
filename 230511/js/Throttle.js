// 스로틀 구현하기
const Throttle = (preCallback, callback, delay) => {
  let timerId;
  return () => {
    preCallback();
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, delay);
  };
};

export default Throttle;
