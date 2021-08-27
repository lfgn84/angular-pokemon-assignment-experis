export interface Pokemon {
  name: string;
  url: string;
}
export interface IndivdualPokemon {
  catched:boolean,
  baseStats: {
    img: string,
    types: any,
    name: string,
    id: number
  },
  profile: {
    height: number,
    weight: number
  }
}
