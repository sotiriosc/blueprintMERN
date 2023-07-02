const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('balancedblueprint');
        const product = database.collection('products');
        const categories = database.collection('categories');

        const products = [
            {
            _id:"64a176e08ac4adfd1e27b95c",
            name: "Buy me a Coffee",
            description: "Show your support by buying me a coffee!",
            image: "coffee.jpeg",
            price: 3.00,
            quantity: 1000,
            category:"64a17036a4fd44a00243ab01",
            },
            
            // Add more blog posts as needed

            
        ];

        const category = [
            {
                _id: "64a17036a4fd44a00243ab01",
                name: "Donation",
            },
        ]



        const result = await categories.insertMany(category);
        const result2 = await product.insertMany(products);
        console.log(`${result.insertedCount+result2.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
