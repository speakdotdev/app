import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://ado:ninja1@main-zxsxp.mongodb.net/speakdotdev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database() {
    if (!client.isConnected()) await client.connect();
    const db = client.db('speakdotdev');
    return db;
}


export default database;