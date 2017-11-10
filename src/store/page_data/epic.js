import { ajax } from 'rxjs/observable/dom/ajax';


export default action$ =>{
  return action$.ofType("FETCH_EPISODES")
    .mergeMap(action =>
      ajax.getJSON(`https://19wjbdak7f.execute-api.us-east-1.amazonaws.com/Develop/episodes`)
        .map(response => ({type: "FETCH_EPISODES_FULFILLED", payload:response}))
    );
}