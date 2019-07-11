const chainChanges = changes_array => state =>
  changes_array.reduce((state, func) => func(state), state);

export default chainChanges;
