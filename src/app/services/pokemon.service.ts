import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  }

}
