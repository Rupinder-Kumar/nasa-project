const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const { loadPLanetsData } = require('./models/planets.model');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const MONGO_URL = 'mongodb+srv://nasa-api:Zv2qPOK1WPbBiiJb@atlascluster.7wvkwny.mongodb.net/nasa?retryWrites=true&w=majority';
mongoose.connection.once('open',  () => {
    console.log("MongoDB connection Ready!")
});

mongoose.connection.on('error' ,(err) => {
    console.error(err)
});

async function startServer () {
    await mongoose.connect(MONGO_URL);
    await loadPLanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}

startServer();