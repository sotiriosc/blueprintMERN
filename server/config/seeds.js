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
                title: 'Top 10 Cardio Workouts for a Healthy Heart, Youthfulness & Improved Performance', 
                filePath: '/blog3',
                comments: [] 
            },
            { 
                _id: new ObjectId(), 
                title: 'The Art of Meal Prepping: How to Plan, Cook, and Store Meals for a Healthier Lifestyle', 
                filePath: '/blog4',
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
