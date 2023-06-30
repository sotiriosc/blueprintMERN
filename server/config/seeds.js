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
                title: 'First Blog', 
                filePath: '/blog1',
                comments: [
                    {
                        firstName: 'Alice',
                        commentText: 'This is a comment.',
                        createdAt: new Date()
                    },
                    // Add more comments as needed
                ] 
            },
            { 
                _id: new ObjectId(), 
                title: 'Second Blog', 
                filePath: '/blog2',
                comments: [
                    {
                        firstName: 'Bob',
                        commentText: 'This is another comment.',
                        createdAt: new Date()
                    },
                    // Add more comments as needed
                ] 
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
