var mysql = require('mysql');
// function sql(){
exports.command=function(cmd){
    
    var pool  = mysql.createPool({
        connectionLimit : 10,
        host            : '192.168.99.100',
        user            : 'root',
        password        : 'root',
        database        : 'mysql'
    });
    pool.getConnection(function(err, connection) {
        console.log(connection);
        connection.query(cmd, function (error, results, fields) {
            connection.release();
            console.log('The solution is: ', results);
        });
    });
}
// }
// module.exports=sql;
