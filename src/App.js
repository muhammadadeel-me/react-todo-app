import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Record from './components/Record';
import { useEffect, useState } from 'react';

function App() {

  // We are keeping records in App.js becuase we need in multiple childs
  // And we are not using contextAPI or Redux
  const [records, setRecords] = useState([])

  useEffect(()=>{
    if(localStorage.getItem('records')){
      setRecords(JSON.parse(localStorage.getItem('records')))
    }else{
      localStorage.setItem('records', JSON.stringify(records))
    }
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Form records={records} setRecords={setRecords} />
      <div className="records">
        {/* <div className="record">
          <h4>Mark</h4>
          <h4>Todo</h4>
          <h4>Priority</h4>
          <h4>Action</h4>
        </div> */}
        {
          records.map(({completed, todo, priority}, index)=>{
            return <Record key={index} index={index} records={records} setRecords={setRecords} priority={priority} completed={completed} todo={todo} />
          })
        }
      </div>
    </div>
  );
}

export default App;
