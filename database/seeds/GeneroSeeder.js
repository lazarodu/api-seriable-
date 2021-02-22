'use strict'

/*
|--------------------------------------------------------------------------
| GeneroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Genero = use('App/Models/Genero')

class GeneroSeeder {
  async run () {

    const generos = [
      { nome: "Ação"},
      { nome: "Drama"},
      { nome: "Romance"},
      { nome: "Comédia"},
      { nome: "Policial"},
      { nome: "Reality"}
    ];

    await Genero.createMany(generos);

  }
}

module.exports = GeneroSeeder
