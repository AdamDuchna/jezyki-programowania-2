function validateInfo(values){
    let errors={}
    if(!values.title.trim()){
        errors.title = "Title required"
    }
    if(!values.body.trim()){
        errors.body = "Description required"
    }
    return errors;
}
export default validateInfo;