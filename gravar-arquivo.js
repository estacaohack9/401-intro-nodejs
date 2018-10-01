const fs = require('fs');
let string = process.argv[2];

fs.writeFile('teste.txt', string, function(){
    console.log('Terminei de gravar o seu arquivo :)');
});

console.log('Terminei de enviar o comando para gravação da bagaça.');