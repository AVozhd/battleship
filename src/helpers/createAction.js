export default actionName => (payload, options = {}) => ({
  type: actionName,
  payload,
  ...options
});
