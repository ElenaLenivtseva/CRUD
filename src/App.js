import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] =useState(false)
  const rows = [
    {page: "Page 1", description: 'this is the first page', status: 'live'},
    {page: "Page 2", description: 'this is the second page', status: 'draft'},
    {page: "Page 3", description: 'this is the third page', status: 'error'},
  ]
  return (
    <div className="App">
      <Table rows={rows}/>
      <button className='btn' onClick={()=>setModalOpen(true)}>Add</button>
      {modalOpen && <Modal closeModal={()=>setModalOpen(false)}/>}
      {/* проверка, что гит работает */}
    </div>
  );
}

export default App;
