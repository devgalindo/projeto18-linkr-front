import { useState } from "react"
import { useAuth } from "../../context/Context"
import AuthBoard from "./AuthBoard"
import { SingInPage } from "./style"



export default function SignIn() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log(form)
    }
    
    return (
        <SingInPage>
            <AuthBoard/>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="e-mail" type='email' id='email' onChange={handleForm}/>
                <input name='password' placeholder='password' type='password' id='password' onChange={handleForm}/>
                <button type="submit" >Log In</button>
            </form>
        </SingInPage>
    )
}