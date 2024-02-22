import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// configureStore는 store를 생성하지만 createStore와 달리 여러 개의 리듀서를 하나로 합칠 수 있다.
// 원래는 createStore를 사용하여 store를 생성하고, combineReducers를 사용하여 리듀서를 하나로 합쳤다.
// 혹은 단일 리듀서를 사용했다.
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         //override state, Do not change the state directly!
//         //why? because react-redux will not detect the change and will not re-render the component
//         counter: state.counter + 1,
//         isCounter: state.isCounter,
//       };
//     case "increase":
//       return {
//         counter: state.counter + action.amount,
//         isCounter: state.isCounter,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         isCounter: state.isCounter,
//       };
//     case "toggle":
//       return {
//         counter: state.counter,
//         isCounter: !state.isCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterSlice.reducer);

export default store;
