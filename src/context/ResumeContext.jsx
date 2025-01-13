
import React, { createContext, useEffect, useState } from 'react'

const ResumeContext = createContext();

export const ResumeProvider = ({children}) =>{
    const [resumes, setResumes] = useState(()=>{
        const savedResumes = localStorage.getItem('resumes');
        return savedResumes ? JSON.parse(savedResumes):[];
    });


    useEffect(()=>{
        localStorage.setItem('resumes', JSON.stringify(resumes));
    }, [resumes]);

    const addResume = (resume) =>setResumes((prev)=>[...prev,resume]);

    const updateResume = (index, updatedResume) =>{
        const updatedResumes = [...resumes];
        updatedResumes[index] = updatedResume;
        setResumes(updatedResumes);
    }

    const deleteResume = (index) =>{
        const filteredResumes = resumes.filter((_,i)=> i !== index);
        setResumes(filteredResumes)
    }

    return(
        <ResumeContext.Provider value={{resumes,addResume,updateResume,deleteResume}}>
            {children}
        </ResumeContext.Provider>
    )
}

export default ResumeContext;

