'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SerieSchema extends Schema {
  up () {
    this.create('series', (table) => {
      table.increments()
      table.string("nome").notNullable()
      table.string("plataforma").nullable()
      table.text("descricao").nullable()
      table.integer("temporadas").nullable()
      table.string("elenco").nullable()
      table.date("lancamento").notNullable()
    table.integer("genero_id").unsigned().references("id")
    .inTable("generos").onUpdate("cascade").onDelete("cascade").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('series')
  }
}

module.exports = SerieSchema
