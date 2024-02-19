import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <form>
          <div className='form-group'>
            <label htmlFor="page">Page</label>
            <input name="page" />
          </div>
          <div className='form-group'>
            <label htmlFor="description">Description</label>
            <input name="description" />
          </div>
          <div className='form-group'>
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
