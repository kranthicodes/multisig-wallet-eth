import React from "react";

export default function NewTransfer({ createTransfer }) {
  const [transfer, setTransfer] = React.useState(null);
  const updateTransfer = (evt, type) => {
    const value = evt?.target?.value;
    if (!transfer) {
      setTransfer({ [type]: value });
    } else {
      setTransfer({ ...transfer, [type]: value });
    }
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    createTransfer(transfer);
  };
  return (
    <div>
      <h2>Create Transfer</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          onChange={(evt) => updateTransfer(evt, "amount")}
        />
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          onChange={(evt) => updateTransfer(evt, "to")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
