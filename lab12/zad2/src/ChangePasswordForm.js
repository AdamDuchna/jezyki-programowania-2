import { useState } from "react"

const ChangePasswordForm = (props) => {
    const [password, onChange] = useState("")
    const Change = (e) => {
        return password + e
    }

    return (
        <form >
            <label>Hasło</label>
            <input type="password" onChange={onChange(Change)} />
            <button type="submit">Zatwierdź</button>
            <h1>{password}</h1>
        </form>
    )
}

export default ChangePasswordForm;