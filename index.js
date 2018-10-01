const fs = require('fs');

fs.readFile('dados.csv', {encoding: 'utf8'}, function(erro, dados){
    if(erro){
        console.log('Erro ao ler arquivo.');
    }

    let linhas = dados.split('\n');

    for(let linha of linhas){
        let colunas = linha.split(',');
        let nome = colunas[1];

        if(nome.charAt(0) === 'A'){
            console.log(nome);
        }
    }
});