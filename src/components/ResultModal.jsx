import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, resetHandler }, ref) => {
    const dialog = useRef();

    const playerLost = remainingTime <= 0;
    // const formattedRemainingTime = +(remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });
    return (
      <dialog className="result-modal" ref={dialog} onClose={resetHandler}>
        {playerLost && <h2>You lost!</h2>}
        {!playerLost && <h2>Your score : {score}%</h2>}
        <p>
          the target time was<strong>{targetTime} seconds.</strong>
        </p>
        {!playerLost ? (
          <p>
            You stopped the timer with
            <strong>{remainingTime / 1000} seconds left</strong>
          </p>
        ) : (
          <p>The time ran out!</p>
        )}
        <form method="dialog" onSubmit={resetHandler}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
