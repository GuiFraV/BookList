import React, { useReducer } from "react";

// Définition du type pour notre état
interface CounterState {
  count: number;
  step: number;
}

// Définition des types d'actions possibles
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET_STEP"; payload: number };

// Notre fonction reducer
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "RESET":
      return { ...state, count: 0 };
    case "SET_STEP":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  // Initialisation de useReducer avec notre reducer et l'état initial
  const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) =>
          dispatch({ type: "SET_STEP", payload: Number(e.target.value) })
        }
      />
    </div>
  );
};

export default Counter;
