import { ajax } from 'rxjs/observable/dom/ajax';
// import actions from './actions';


// epic
// export default action$ =>{
//   return action$.ofType("FETCH_EPISODES")
//     .mergeMap(action =>
//       ajax.getJSON(`https://19wjbdak7f.execute-api.us-east-1.amazonaws.com/Develop/episodes`)
//         .map(response => ({type: "FETCH_EPISODES_FULFILLED", payload:response}))
//     );
// }

export default action$ => action$
  .filter(action => action.type === "FETCH_EPISODES")
  .delay(1000) // Asynchronously wait 1000ms then continue
  .mapTo({ type: "FETCH_EPISODES_FULFILLED" });