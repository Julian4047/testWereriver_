const mysql = require('mysql');
const conection = mysql.createConnection({
    host: 'bd0kp6pbuzd7pdnz82st-mysql.services.clever-cloud.com',
    database: 'bd0kp6pbuzd7pdnz82st',
    user: 'uxh9tay4uillinby',
    password: 'ZGCD7IDcNV3ukzkdMyRx',
    port: '3306',
});


conection.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conection.threadId);
});

conection.query("SELECT * from orders", function(error, results, fields) {
    if (error)
        throw error;

    results.forEach(results => {
        console.log(results);
    });
});

conection.query('INSERT INTO orders(Id,Nombre,Apellido,Producto) VALUES ("3","tetra","bric","420");');
conection.end();