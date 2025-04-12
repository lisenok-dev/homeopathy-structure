import './css/App.css';
import './css/PeriodicTable.css';
import PeriodicTable from './Components/PeriodicTable';
import React from 'react';
import Modal from "react-modal";

// Set the root element for accessibility
Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <h1>Периодическая таблица Менделеева</h1>
      <PeriodicTable />
    </div>
  );
}

export default App;