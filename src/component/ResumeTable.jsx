import React, { useContext } from 'react'
import ResumeContext from '../context/ResumeContext'

const ResumeTable = ({setEditingIndex}) => {
    const {resumes, deleteResume} = useContext(ResumeContext);
  return (
    <table>
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skills</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {resumes.map((resume, index)=>(
                <tr key={index}>
                    <td>{resume.name}</td>
                    <td>{resume.email}</td>
                    <td>{resume.phone}</td>
                    <td>{resume.skills.join(', ')}</td>
                    <td>
                        <button onClick={()=>setEditingIndex(index)}>Edit</button>
                        <button onClick={()=>deleteResume(index)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ResumeTable
