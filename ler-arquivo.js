const fs = require('fs');

fs.readFile('teste.txt', {encoding: 'utf8'}, function(erro, dados){
    if(erro){
        console.log('Erro ao ler o arquivo.');
    }else{
        console.log(dados);
    }
});