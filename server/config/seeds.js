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
                title: 'Secrets to a Successful Weight Loss Program: Tips and Tricks for Reaching Your Imagined Physique', 
                filePath: '/blog7',
                comments: [] 
            },
            { 
                _id: new ObjectId(), 
                title: 'The Mental and Physical Benefits of Outdoor Activities', 
                filePath: '/blog8',
                comments: [] 
            },
            { 
                _id: new ObjectId(), 
                title: 'The Road to Recovery: Handling Injuries Physically and Mentally', 
                filePath: '/blog9',
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
