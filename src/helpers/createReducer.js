const createReducer = (initialState, handlers, validator) =>
  validator
    ? (state = initialState, action) =>
        validator(
          handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state
        )
    : (state = initialState, action) =>
        handlers.hasOwnProperty(action.type)
          ? handlers[action.type](state, action)
          : state;

export default createReducer;
