import React from "react";

export default function TransferList({ transfers, approveTransfer }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers?.map((transfer) => {
            return (
              <tr key={transfer?.id}>
                <td>{transfer?.id}</td>
                <td>{transfer?.amount}</td>
                <td>{transfer?.to}</td>
                <td>
                  {transfer?.approvals}
                  <button onClick={() => approveTransfer(transfer?.id)}>
                    Approve
                  </button>
                </td>
                <td>{transfer?.sent ? "yes" : "no"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
