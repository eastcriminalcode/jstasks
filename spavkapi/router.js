import Controller from './controller';

function getRouteInfo() {
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');

  return {name, params: {id}};
}

function handHash() {
  const {name, params} = getRouteInfo();

  if (name) {
    const routeName = name + 'Route';
    Controller[routeName](params);
  }
}

export default {
  init() {
    addEventListener('hashchange', handHash);
    handHash();
  }
}