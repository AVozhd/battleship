const logError = error =>
  process.env.NODE_ENV !== "production" && console.error(error);

export default logError;
