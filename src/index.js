import store from "./store";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("store changes: ", store.getState());
});
store.dispatch(actions.bugAdded("bug 1"));
unsubscribe();
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
