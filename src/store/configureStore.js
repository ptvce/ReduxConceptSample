import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

export default function () {
  return configureStore({
    reducer: reducer,
    ...getDefaultMiddleware(),
    middleWare: [logger("console"), toast],
  });
}
