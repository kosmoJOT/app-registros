interface ResultadoConsulta {
  name: string,
  url: string
}

interface ConsultaPokemonApi {
  count: number,
  next: string
  previus: string,
  results: ResultadoConsulta[]
}

export { ResultadoConsulta, ConsultaPokemonApi }

