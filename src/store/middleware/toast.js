const toast = (store) => (next) => (action) => {
  if (action.type === "error") console.log("toastify");
  else next(action);
};

export default toast;
