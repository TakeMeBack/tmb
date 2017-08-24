import { ajax } from 'rxjs/observable/dom/ajax';
import actions from './actions';


// epic
export default action$ =>
  action$.ofType(actions.FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => actions.fetchUserFulfilled(response))
    );