import { useState } from "react"

const ChangePasswordForm = ({handleAction}) => {
    const [typed,toType] = useState('')

    const Change=(e)=>{

        toType(e.target.value)
    }
    const Action=(e)=>{
        e.preventDefault()
    }

    return (
        <form onSubmit={Action}>
            <label>Hasło</label>
            <input type="password" onChange={Change} />
            <button onClick={()=>{handleAction(typed)}}>Zatwierdź</button>
        </form>
    )
}

export default ChangePasswordForm;