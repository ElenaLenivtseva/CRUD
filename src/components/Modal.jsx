import React from "react";
import {useState} from "react";
import "./Modal.css";

const Modal = ({closeModal, onSubmit}) => {
  const [formState, setFormState] = useState({
    page: '',
    description: '',
    status: 'live'
  })
  
  const [errors, setErrors] = useState('')

  const handleChange = (e)=> {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const validateForm =()=> {
    if (formState.page && formState.description && formState.status) {
      setErrors('')
      return true
    } else {
      let errorFields = []
      for(const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(', '))
      return false
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    onSubmit(formState)
    closeModal()
  }
  return (
    <div className="modal-container" onClick={(e) => {
      if (e.target.className==='modal-container') closeModal()
      
      }}>

      <div className="modal">
        <form>
          <div className='form-group'>
            <label htmlFor="page">Page</label>
            <input name="page" value={formState.page} onChange={(e)=> handleChange(e)}/>
          </div>
          <div className='form-group'>
            <label htmlFor="description">Description</label>
            <input name="description" value={formState.description} onChange={(e)=> handleChange(e)}/>
          </div>
          <div className='form-group'>
            <label htmlFor="status">Status</label>
            <select name="status" value={formState.status} onChange={(e)=> handleChange(e)}>
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className='error'>{`Please include: ${errors}`}</div>}
          
          <button className='btn' type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
