import './Record.css'

function Record({index, completed, todo, records, setRecords}) {

  // This variable will help us to update checkbox value
  let isCompleted = completed ? 'complete' : 'incomplete'

  // Checkbox handler
  const handleComplete = (action, index) => {

    let newRecords = [...records]
    if(action === "incomplete"){
      let record = newRecords[index].completed = true
    }
    if(action === "complete"){
      let record = newRecords[index].completed = false
    }
    setRecords(newRecords)
    localStorage.setItem('records', JSON.stringify(newRecords))
  }

  // Removed Record
  const removeRecord = index => {
    let newRecords = [...records]
    newRecords.splice(index, 1)
    setRecords(newRecords)
    localStorage.setItem('records', JSON.stringify(newRecords))
  }

  return (
    <div className='record'>
      {
        <input type="checkbox" title='Mark as incomplete' checked={completed} onChange={()=> handleComplete(isCompleted, index)} />
        // <input type="checkbox" title='Mark as completed' onChange={()=> handleComplete('complete', index)} />
      }
        <p className={completed? "completed" : ""}>{todo}</p>
        <button title='Delete this todo' onClick={()=> removeRecord(index)}>Remove</button>
    </div>
  )
}

export default Record
