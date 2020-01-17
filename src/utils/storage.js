let listeners = [];
const prefix = 'goinsideshop'

const storage = {
  subscribe(event, listener) {
    if (typeof listeners[event] !== 'object') {
      listeners[event] = [];
    }
    listeners[event].push(listener);
    return () => this.unsubscribe(event, listener);
  },
  publish(event, ...rest) {
    if (typeof listeners[event] === 'object') {
      listeners[event].forEach(listener => listener.apply(this, rest));
    }
  },
  unsubscribe(event, listener) {
    if (typeof listeners[event] === 'object') {
      const idx = listeners[event].indexOf(listener);
      if (idx > -1) {
        listeners[event].splice(idx, 1);
      }
    }
  },
  subscribeOnce(event, listener) {
    const remove = this.subscribe(event, (...rest) => {
      remove();
      listener.apply(this, rest);
    });
  },
  get(key, defaultValue = null) {
    let state = localStorage.getItem(prefix);
    state = JSON.parse(state || '{}');
    return state[key] ?? defaultValue;
  },
  set(key, data) {
    let state = localStorage.getItem(prefix);
    state = JSON.parse(state || '{}');
    state[key] = data;
    localStorage.setItem(prefix, JSON.stringify(state));
    this.publish(key, state[key]);
  },
};

export default storage;
