import { characters as charsAT } from '../../mocks/characters.json'

import { useState, useEffect } from 'react'

import Auth from '../Auth/Auth'
import Cards from "../Cards/Cards"

import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import CreateChar from '../CreateChar/CreateChar'

const Home = () => {

    const [ charList, setCharList ] = useState([])

    const charactersCollectionRef = collection(db,'characters')

    useEffect(() => {
      const getCharList = async () => {
          //READ THE DATA
          //SET THE CHARACTERS LIST
          try {
            const data = await getDocs(charactersCollectionRef)
            const filteredData = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }))

            setCharList(filteredData)
          } catch (error) {
            console.log(error);
          }
      }
      getCharList()
    }, [])
    

  
    return (
        <div>
            <h1>Home Component</h1>
            <Auth/>
            <CreateChar/>
            <Cards characters={charList}/>
        </div>
    )
}

export default Home