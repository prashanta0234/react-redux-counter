// import { increment, decrement } from "../redux/counter/action";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/action";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandaler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandeler = (value) => {
    dispatch(decrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandaler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandeler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.value,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (value) => dispatch(increment(value)),
//     decrement: (value) => dispatch(decrement(value)),
//   };
// };

export default Counter;
