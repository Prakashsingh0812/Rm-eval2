import React, { useContext, useState } from 'react';
import ResumeContext from '../context/ResumeContext';

const ResumeForm = ({editingIndex, setEditingIndex}) => {
    const {resumes,addResume,updateResume} = useContext(ResumeContext);

    const [formData, setFormData]=useState(()=>
        editingIndex !== null ?
        resumes[editingIndex]:{name:'',email:'',phone:'',skills:[]}
    )

    const [errors, setErrors] = useState({});

    const validate = () =>{
        const newErrors = {};

        if(!formData.name) newErrors.name = 'Name is required';
        if(!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if(!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10 digit phone number is required';
        if(!formData.skills.length) newErrors.skills = 'Atleast 1 skill is required'
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;



    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!validate()) return;

        if(editingIndex !== null){
            updateResume(editingIndex, formData);
            setEditingIndex(null);
        }else{
            addResume(formData);
        }
        setFormData({name:'', email:'',phone:'',skills:[]});
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            {errors.name && <span>{errors.name}</span>}

            <input type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            {errors.email && <span>{errors.email}</span>}

            <input type="number" placeholder='Phone' value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            {errors.phone && <span>{errors.phone}</span>}

            <select multiple value={formData.skills} onChange={(e)=> setFormData({...formData, skills: Array.from(e.target.selectedOptions, (opt)=> opt.value)})}>

                <option value="JavaScript">JavaScript</option>
                <option value="Node">Node</option>
                <option value="React">React</option>
                <option value="Python">Python</option>
            </select>
            {errors.skills && <span>{errors.skills}</span>}
            <button type='submit'>{editingIndex !== null ? 'Update':'Add'} Resume</button>


        </form>
      
    </div>
  )
}

export default ResumeForm;
