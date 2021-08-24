export interface Pokemon {
  name: string;
  url: string;
}
export interface IndivdualPokemon {
  baseStats: {
    img: string,
    types: string,
    name: string,
    id: number
  },
  profile: {
    height: number,
    weight: number
  }
}
