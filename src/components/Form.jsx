import { useState } from 'react'
import './Form.css'

function Form({records, setRecords}) {
  let [todo, setTodo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(todo){
      setRecords([
        ...records,{ completed: false,todo: todo,}
      ])
      setTodo('')
    }
  }

  return (
    <div className='form-container'>
      <form className='form'>
        <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder='Add todo...' />
        <button type='submit' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default Form
