export function after(callCount: number, callback: (...args: any[]) => any) {
  let calledCount = 0;
  return (...args: any[]) => {
    calledCount += 1;
    if (callCount === calledCount + 1) {
      callback(args);
    }
  };
}

export function debounce<T extends (...args: any[]) => any>(
  f: T,
  wait: number,
  immediate: boolean
) {
  let timeout: any;
  return function() {
    const _this: any = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        f.apply(_this, [...args]);
      }
    }, wait);
    if (immediate && !timeout) {
      f.apply(_this, [...args]);
    }
  };
}

export function throttle<T extends (...args: any[]) => any>(
  f: T,
  frame: number
) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= frame) {
      f();
      lastTime = now;
    }
  };
}
