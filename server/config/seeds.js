const { MongoClient, ObjectId } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('balancedblueprint');
        const blogs = database.collection('blogs');

        const blogPosts = [
            { 
                _id: new ObjectId(), 
                title: 'The Power of Protein: Best Sources, Benefits, and How Much You Need', 
                filePath: '/blog5',
                comments: [] 
            },
            { 
                _id: new ObjectId(), 
                title: 'The Importance of Healing: 6 Key Components to Achieve Optimal Wellness', 
                filePath: '/blog6',
                comments: [] 
            },
            // Add more blog posts as needed
        ];

        const result = await blogs.insertMany(blogPosts);

        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
