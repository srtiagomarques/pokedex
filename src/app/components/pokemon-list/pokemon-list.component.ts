import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokeJson: any;
  error: any;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.getter();
  }

  ngOnInit() {

  }

  getter() {
    this.pokemonService.getPokemons()
      .subscribe(
        data => {
          this.pokeJson = data;
          this.pokeJson = Array.of(this.pokeJson);
          console.log('data: ', data)
          console.log('this.json: ', this.pokeJson);
        },
        error => {
          this.error = error;
          console.error('this.error: ', this.error);
        });
  }

}
