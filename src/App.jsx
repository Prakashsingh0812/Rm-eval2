import { useState } from 'react'
import ResumeContext, { ResumeProvider } from './context/ResumeContext'
import ResumeForm from './component/ResumeForm'
import ResumeTable from './component/ResumeTable'

import './App.css'
import { useContext } from 'react'


function App() {
 
  const [filteredResumes,setFilteredResumes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);


  

  return (
   <ResumeProvider>
    <div>
      <h1>
        Resume App
      </h1>
      <ResumeForm editingIndex ={editingIndex} setEditingIndex={setFilteredResumes}/>
      <ResumeTable editingIndex ={editingIndex} setEditingIndex={setFilteredResumes}/>

    </div>
   </ResumeProvider>
  )
}

export default App
