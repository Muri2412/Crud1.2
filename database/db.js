const Client = require('pg').Client;

const conexao = new Client({
    user:"postgres", 
    password:"ifms", 
    host: "localhost", 
    port: 5432,
    database: "Hospital"
});

conexao.connect((error)=> {
    if (error) {
        console.error('[ERRO]Falha na conexão' + error);
        return;
    }
    console.log('Conectado com sucesso');
}
);

module.exports = conexao;