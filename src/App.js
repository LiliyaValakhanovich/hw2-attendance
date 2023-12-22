import {useEffect, useState} from "react";
import './App.css';

const students = ["Lida", "Kate", "Stepan", "Vladimir"];
console.log(students);
const dates = ["2023-12-01", "2023-12-02", "2023-12-03", "2023-12-04", "2023-12-05"];
console.log(dates.length);
function App() {
  
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th className="line"></th>
            <DateName dates={dates}/>
          </tr>
        </thead>
        <tbody>
          <StudentsName students={students}/>
        </tbody>
      </table>
    </div>
  );
}

const StudentsName=(students)=>{
  const[click, setClick]=useState(false);
   
  
  useEffect(()=>{
    
  },[click])
  return students.students.map((el,i)=>{
      return (
        <tr key={i}>
          <td className="column">{el}</td>
          <td className="column" onClick={()=>{setClick(true)}}>{click ? 'V':''}</td>
        </tr>
      )
  })
}



const DateName=(dates)=>{
  return dates.dates.map((el)=>{
      return(
        <th className="line">{el}</th>
      )
  })
  
}

export default App;
