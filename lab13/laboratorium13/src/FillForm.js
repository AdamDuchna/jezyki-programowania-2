import PostDetail from './PostDetail';
import useForm from './useForm';
import validateForm from './validateForm';

const FillForm=()=>{
    const {handleChange,userData,handleSubmit,errors,formStatus} = useForm(validateForm)


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor='title' className='form-label'>Title</label>
                <input id='title' name='title'type="text" className='form-input' placeholder="Enter title" value={userData.title} onChange={handleChange}></input>
                {errors.title && <p>{errors.title}</p>}
                </div> 
                <div className='descriptionfield'>            
                <label htmlFor='body' className='form-label'>Description</label>
                <input id='body' name='body'type="text" className='form-desc' placeholder="Enter description" value={userData.body} onChange={handleChange}></input>
                {errors.body && <p>{errors.body}</p>}
                </div>   
                <button type='submit' className='form-submit' >Submit</button>
            </form>
        </div>
    )
}
export default FillForm;