import { Component } from '@angular/core';
import { Type } from '../_model/type';
import { Pokemon } from '../_model/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: "Bulba",
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: "Ivysauro",
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: "Venosauro",
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      number: 3,
      name: "Charmander",
      types: [
        Type.Fire,
        Type.Poison,
      ],
    },
  ];

}
