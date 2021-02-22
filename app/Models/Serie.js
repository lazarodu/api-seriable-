'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Moment = use('moment')

class Serie extends Model {
    genero(){
        return this.belongsTo("app/Models/Genero")
    }
    
    static get dates () {
        return super.dates.concat(['lancamento'])
      }
    
      static formatDates (field, value) {
        if (field === 'lancamento') {
            //Permite que a pessoa use a data no formato brasileiro
          return Moment(value,'DD/MM/YYYY').format("YYYY-MM-DD")
        }
        return super.formatDates(field, value)
      }

      static castDates (field, value) {
        if (field === 'lancamento') {
          return Moment(value,'YYY-MM-DD').format('DD/MM/YYYY')
        }
        return super.formatDates(field, value)
      }
}

module.exports = Serie
