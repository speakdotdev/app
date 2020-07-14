const { MongoClient } = require('mongodb');

let uri =
  'mongodb+srv://mongodb:mongodb@cluster0-tdm0q.mongodb.net/gif-battle?retryWrites=true&w=majority';
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = await client.db('speakdotdev');

  cachedDb = db;
  return db;
}
