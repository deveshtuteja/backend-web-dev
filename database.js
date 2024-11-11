const { MongoClient } = require('mongodb');

const url = "mongodb+srv://deveshtuteja17:pawbFLGCRTwVbu7W@cluster0.oqypu.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // const data = {
    //     firstname: "Virat",
    //     lastname: "Kohli",
    //     city: "London",
    //     country: "UK"
    // }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // the following code examples can be pasted here...
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log("found documents=> ", countResult);

    //find all documents with a filter of first name => Virat


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

//NOTES

// Go to mongodb website
// Create a m0 free cluster
// Create a user
// Get the connection string
// Install MongoDb compass
// Create a DB
// Create a connection from code
// Documents-CRUD operations