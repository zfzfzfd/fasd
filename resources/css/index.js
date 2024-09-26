
            const socket = io(); // 또는 그냥 io()로 사용 // Socket.IO 클라이언트 초기화
        
            
            socket.on('update', (data) => {
                console.log('Latest Heart Sensor Data:', data.heartSensor);
                document.getElementById('heartSensorValue').innerText = data.heartSensor; // 센서 값 업데이트
            });
        
            // 추가: 연결이 성공했는지 확인하는 로그
            socket.on('connect', () => {
                console.log('Socket.IO 연결 성공');
            });
        
            // 추가: 연결이 끊어졌을 때 로그
            socket.on('disconnect', () => {
                console.log('Socket.IO 연결 끊김');
            });
