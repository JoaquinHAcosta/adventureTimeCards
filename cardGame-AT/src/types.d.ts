interface Appearance {
    hair: string;
    eyes: string;
    height: string;
    weight?: string;
}

type Images = string[]

export interface Character {
    id: number
    name: string
    species: string
    age: number
    gender: string
    // appearance: Appearance
    powers: string[]
    origin: string
    image: string
}

export type ListOfCharacters = {
    characters: Character[]
}