const knex = require('knex')({
    client: 'pg',
    connection:{
        host : 'localhost',
        user: 'admin',
        password: 'zaq1xsw2',
        database: 'todolist',
        charset: 'utf8'
    }
});

const bookshelf = require('bookshelf')(knex);

export default bookshelf