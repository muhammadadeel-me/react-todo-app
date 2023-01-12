import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Record from './components/Record';
import { useState } from 'react';

function App() {

  // We are keeping records in App.js becuase we need in multiple childs
  // And we are not using contextAPI or Redux
  const [records, setRecords] = useState([])

  return (
    <div className="wrapper">
      <Header />
      <Form records={records} setRecords={setRecords} />
      <div className="records">
        {
          records.map(({completed, todo}, index)=>{
            return <Record key={index} index={index} records={records} setRecords={setRecords} completed={completed} todo={todo} />
          })
        }
      </div>
    </div>
  );
}

export default App;
