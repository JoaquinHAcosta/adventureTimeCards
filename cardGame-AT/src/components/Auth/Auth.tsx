import { auth, googleProvider } from "../../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'

const Auth = () => {

    const [ loginInput, setLoginInput ] = useState({
        email: '',
        password: ''
    })

    // console.log(auth.currentUser?.email);
    

    const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginInput({
            ...loginInput,
            [event.target.name] : event.target.value
        })
    }

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, loginInput.email, loginInput.password)
        } catch (error) {
            console.log(error);
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input 
                onChange={handleChange} 
                placeholder='Email...' 
                type="text" name='email'
                value={loginInput.email}
            />
            <input 
                onChange={handleChange} 
                placeholder='Password...' 
                type="password"  name='password'
                value={loginInput.password}
            />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign in with google</button>

            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Auth