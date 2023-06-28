interface Pokemon {
  abilities: object[],
  base_experience: number,
  forms: object[],
  game_indices: object[],
  height: number,
  held_items: object[],
  id: number,
  location_area_encounters: string,
  moves: object[],
  name: string,
  order: number,
  past_types: any,
  species: object,
  img?: string,
  stats: object[],
  types: object[],
  weight: number
}

export { Pokemon }
