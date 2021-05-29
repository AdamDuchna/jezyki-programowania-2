import {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const useForm = (validate) =>{
    const history = useHistory() 
    const[userData,setData] = useState({
        userId: '1',
        id: '101',
        title: '',
        body: ''
    })
    const [errors, setErrors] = useState({init:"init"})
    const [formStatus,setFormStatus] = useState(false)
    const handleChange = e =>{
        setData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
         setErrors(validate(userData))
        if(Object.keys(validate(userData)).length === 0) {setFormStatus(true)}

    }


    return {handleChange, userData, handleSubmit,errors,formStatus,history}
}
export default useForm;