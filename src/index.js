import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
  console.log("store changes: ", store.getState());
});
store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
