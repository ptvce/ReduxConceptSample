import configureStore from "./store/configureStore";
import * as bugs from "./store/bugs";
import * as projects from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("store changes: ", store.getState());
});
store.dispatch(bugs.bugAdded({ description: "bug 1" }));
store.dispatch(bugs.bugResolved({ id: 1 }));
store.dispatch(projects.projectAdded({ name: "test" }));
store.dispatch({
  type: "error",
  payload: { message: "an error occurred." },
});
