import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'

const CreateChar = () => {

    const [ newChar, setNewChar ] = useState({
        name: '',
        species: '',
        gender: '',
        age: 0,
        appearance: {
            hair: '',
            eyes: '',
            height: 0,
            weight: 0
        },
        personality: [],
        powers: [],
        origin: '',
        relationships: {
            friends: [],
            family: []
        },
        image: ''
    })

    const charactersCollectionRef = collection(db,'characters')

    const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewChar({
            ...newChar,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitChar = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        try {
            await addDoc(charactersCollectionRef, newChar)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <form>
                <header>Add Character to DB</header>
                <input 
                    onChange={handleChange} 
                    type="text" placeholder='name'
                    name='name' value={newChar.name}
                />
                <input 
                    onChange={handleChange} 
                    type="text" placeholder='species'
                    name='species' value={newChar.species}
                />
                <input 
                    onChange={handleChange} 
                    type="text" placeholder='gender'
                    name='gender' value={newChar.gender}
                />
                <input 
                    onChange={handleChange} 
                    type="number" placeholder='age'
                    name='age' value={newChar.age}
                />
                <button onClick={onSubmitChar}>Submit</button>
            </form>
        </>
    )
}

export default CreateChar