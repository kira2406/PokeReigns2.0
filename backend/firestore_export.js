const admin = require("firebase-admin");
const fs = require("fs");
require("dotenv").config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_OLD);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function listCollections() {
    const collections = await db.listCollections();
    console.log("Collections in Firestore:");
  
    collections.forEach((collection) => {
      console.log(collection.id);  // Prints each collection name
    });
  }
  
  listCollections();

async function exportPokemonDB() {
  const snapshot = await db.collection("moves").get();
  const data = [];

  snapshot.forEach(doc => {
    data.push({
      _id: doc.id,       // optional: preserve document ID
      ...doc.data()
    });
  });

  fs.writeFileSync("moves.json", JSON.stringify(data, null, 2));
  console.log("Exported moves to moves.json");
}

exportPokemonDB();