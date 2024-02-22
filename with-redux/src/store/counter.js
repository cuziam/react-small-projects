import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isCounter: true };

// createSlice automatically generates action creators
// 장점: 상태를 교체하는 코드를 작성할 필요가 없다. 즉 모든 상태를 재정의할 필요가 없다.
// 단점: action creator의 이름을 변경할 수 없다.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isCounter = !state.isCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
