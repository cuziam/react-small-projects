const redux = require("redux");

//reducer function's paramters are old state and dispatched action
//and returns new state
//reducer must be pure function. It should not mutate the state
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

//1. create store
const store = redux.createStore(counterReducer);

//2. subscribe to store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
