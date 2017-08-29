import actions from './actions';

export default action$ => action$
  .filter(action => action.type === 'PING')
  .delay(1000) // Asynchronously wait 1000ms then continue
  .mapTo({ type: 'PONG' });

