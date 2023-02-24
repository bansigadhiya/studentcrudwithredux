import { useState } from 'react';
import './App.css';
import CreateStudent from './Components/Create-student/CreateStudent';
import EditStudent from './Components/Edit-student/EditStudent';
import ViewStudent from './Components/View-students-data/ViewStudent';

function App() {

  const [isEdit , setIsEdit] = useState(false);

  const handleEdit = () => {
    console.log("handleeditcalled");
    setIsEdit(!isEdit);
  }
  return (
    <div>
      {
        isEdit ? <EditStudent handleEdit={handleEdit}/> : <CreateStudent />
      }
      <ViewStudent handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
