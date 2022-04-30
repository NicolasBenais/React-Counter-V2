const Buttons = ({ counter, setCounter, number, index }) => {
  return (
    <div className="counter">
      <div className="frame-and-btns">
        <button
          className={number > 0 ? "minus-btn-on" : "minus-btn-off"}
          disabled={number > 0 ? false : true}
          onClick={() => {
            const newCounter = [...counter];
            newCounter[index] -= 1;
            setCounter(newCounter);
          }}
        >
          <i className="fa-solid fa-minus fa-2xl"></i>
        </button>
        <div className="frame">{number}</div>
        <button
          className={number < 10 ? "plus-btn-on" : "plus-btn-off"}
          disabled={number < 10 ? false : true}
          onClick={() => {
            const newCounter = [...counter];
            newCounter[index] += 1;
            setCounter(newCounter);
          }}
        >
          <i className="fa-solid fa-plus fa-2xl"></i>
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          const newCounter = [...counter];
          newCounter[index] = 0;
          setCounter(newCounter);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Buttons;
