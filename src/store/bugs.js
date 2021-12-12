import { createAction, createReducer } from "@reduxjs/toolkit";

//action creator:

export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");

//reducer:

let lastId = 1;

export default createReducer([], {
  //key:value
  //action:functions   like: (event => eventHandler)

  [bugAdded.type]: (state, action) => {
    state.push({
      id: lastId++,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (state, action) => {
    const bug = state.filter((bug) => bug.id !== action.payload.id);
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
});
