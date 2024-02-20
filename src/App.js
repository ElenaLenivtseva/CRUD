import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    { page: "Page 1", description: "this is the first page", status: "live" },
    { page: "Page 2", description: "this is the second page", status: "draft" },
    { page: "Page 3", description: "this is the third page", status: "error" },
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
  };
  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)} onSubmit={handleSubmit}/>}
      {/* проверка, что гит работает */}
    </div>
  );
}

export default App;
