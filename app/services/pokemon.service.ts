import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }
  async carregarPokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=251')
    .toPromise();

    this.pokemons = requisicao.results;
    console.log(requisicao.results)

    
  }
}
