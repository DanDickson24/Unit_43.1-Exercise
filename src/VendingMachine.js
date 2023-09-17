import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <p>Welcome to the Vending Machine app!</p>
      <p>Choose a snack:</p>
      <ul>
        <li>
          <Link to="/chips">Chips</Link>
        </li>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
