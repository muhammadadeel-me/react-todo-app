import { useState } from 'react'
import './Form.css'

function Form({records, setRecords}) {
  let [todo, setTodo] = useState('')
  let [priority, setPriority] = useState('Middle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(todo){

      // Update Records & make input field empty
      setRecords([
        { completed: false,todo, priority}, ...records
      ])
      setTodo('')

      // Update Local Storage
      localStorage.setItem('records', JSON.stringify([
        ...records,{ completed: false,todo: todo,}
      ]))
    }
  }

  return (
    <div className='form-container'>
      <form className='form'>
        <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder='Add todo...' />
        <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Middle" selected>Middle</option>
          <option value="Low">Low</option>
        </select>
        <button type='submit' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default Form
