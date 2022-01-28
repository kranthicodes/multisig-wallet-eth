import React from 'react';

export default function Header({approvers, quorum}) {
  return <header>
      <ul>
          <li>Approvers: {approvers?.join(", ")}</li>
          <li>Quorum: {quorum}</li>
      </ul>
  </header>;
}
