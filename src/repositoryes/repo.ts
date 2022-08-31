import connection from "../dbs/dbs.js";

export default function repo(nome){

    connection.query('INSERT INTO produtos (nome, preco, condicao) VALUES ($1, $2, $3)', [nome])
}