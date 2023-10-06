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
    // : Promise<void>
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await addDoc(charactersCollectionRef, newChar)

            //uncomment this when all the functions be in the same file
            //getCharList()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <input 
                    onChange={handleChange} 
                    type="text" placeholder='image'
                    name='image' value={newChar.image}
                />
                <input type='submit'/>
            </form>
        </>
    )
}

export default CreateChar