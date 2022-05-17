const data = JSON.stringify([
    {"name": 'Smith',"age": 33,"sex": 'male'},
    {"name": 'Tommy',"age": 35,"sex": 'male'},
    {"name": 'Juli',"age": 25,"sex": 'female'}
]);
const PORT = 3000;
const http = require('http');
const server = http.createServer((req, res) =>{
    
    res.write(data);
    res.end();
});

server.listen(PORT, (error)=> error? console.log(error): console.log(`listening port ${PORT}`))