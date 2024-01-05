// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

export async function POST({ request }) {
	// @ts-ignore
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('posts');

	try {
		const data = await request.json();

		// Insert data into the database
		const newPost = await coll.insertOne({
			id: uuidv4(),
			name: data.name,
			description: data.description,
			magnet: data.magnet,
			download: data.download,
			isArchived: false,
			images: [],
			comments: [],
			viewer: 0,
			downloaded: 0,
			category: data.category,
            size: data.size,
			postedBy: 4625367423498,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		console.log('add post is success:', newPost);

		// Return a success response with the inserted document
		return json({
			status: 200,
			message: 'add post is success',
			data: newPost
		});
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('add post is failed:', error);
		return json({
			status: 500,
			error: 'add post is failed',
			message: 'Internal Server Error'
		});
	}
}
