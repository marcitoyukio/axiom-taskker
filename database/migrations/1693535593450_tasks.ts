import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.integer('team_id').unsigned().references('teams.id').onDelete('CASCADE').notNullable()
      table.string('task', 60).notNullable()
      table.string('duedate')
      table.string('status').defaultTo('ACTIVE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}