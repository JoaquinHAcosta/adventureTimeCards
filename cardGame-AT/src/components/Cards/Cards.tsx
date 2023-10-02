import './card.css'
import unknowChar from '../../assets/cant-load-image.png'
import { ListOfCharacters } from "../../types"

const Cards = ( { characters }: ListOfCharacters ) => {

    

  return (
    <>
        <h1>Characters</h1>
        <ul className='card-box-ul'>
            {
                characters.map((char) => {
                    const image = char.image ?? unknowChar;

                    return (
                    <li className='card-char' key={char.id}>
                        <img className='char-image' src={image} alt={char.name} />
                        <div className='card-mid-line'></div>
                        <p>{char.name}</p>
                    </li>
                )})
            }
        </ul>
    </>
  )
}

export default Cards