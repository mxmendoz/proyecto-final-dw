const mongoose = require('mongoose');

// const url = 'mongodb+srv://mxmendoz:16567FnZeZJ7Nf8n@ordencafe.s78ew.mongodb.net/abarroteDB';
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'Fallo al conectar a Base de Datos'));
dbConnection.once('open', function callback(){
    console.log('Base de Datos en línea!');
});
module.exports = {
    dbConnection
};
