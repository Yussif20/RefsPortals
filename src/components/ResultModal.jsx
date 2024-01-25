const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal">
      <h2>you {result}</h2>
      <p>
        the target time was<strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
