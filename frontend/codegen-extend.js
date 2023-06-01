const fs = require('fs');
const path = require('path');

/**
 * Файл используется как плагин для генерации кода при фетчинге схемы бэкенда.
 * Плагин дополняет полученную схему бэкенда схемой клиента (src/api/schema-client.gql).
 */
module.exports = {
  plugin(schema, documents, config, info) {
    // return ''
  },
  addToSchema: fs.readFileSync(path.join(__dirname, 'src', 'api', 'schema-client.gql'), 'utf8').toString()
}
