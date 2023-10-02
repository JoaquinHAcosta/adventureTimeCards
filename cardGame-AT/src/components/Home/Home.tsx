import { characters as charsAT } from '../../mocks/characters.json'
import Cards from "../Cards/Cards"

const Home = () => {
  return (
    <div>
        <h1>Home Component</h1>
        <Cards characters={charsAT}/>
    </div>
  )
}

export default Home