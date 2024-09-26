const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '192.168.0.104',  // 라즈베리파이 IP
    user: 'test',           // MySQL 사용자 이름
    password: '1234',       // MySQL 비밀번호
    database: 'data'        // 접근할 데이터베이스 이름
});

connection.connect((err) => {
    if (err) {
        console.error('DB 연결 실패:', err);
        return;
    }
    console.log('MySQL에 성공적으로 연결되었습니다.');

    // 원하는 쿼리를 실행하여 데이터를 가져옵니다
    connection.query('SELECT * FROM sensor_readins', (err, results) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            return;
        }
        console.log('데이터:', results);
    });
});