const AddAndDeleteButtons = ({ counter, setCounter, number }) => {
  return (
    <div className="add-del-btns">
      <button
        className={counter.length < 3 ? "btn-on" : "btn-off"}
        disabled={counter.length < 3 ? false : true}
        onClick={() => {
          const newCounter = [...counter];
          newCounter.push(0);
          setCounter(newCounter);
        }}
      >
        Add Counter
      </button>
      <button
        className={counter.length > 1 ? "btn-on" : "btn-off"}
        disabled={counter.length > 1 ? false : true}
        onClick={() => {
          const newCounter = [...counter];
          newCounter.pop();
          setCounter(newCounter);
        }}
      >
        Delete Counter
      </button>
    </div>
  );
};

export default AddAndDeleteButtons;
