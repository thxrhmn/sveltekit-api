// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

export async function POST({ request }) {
	// @ts-ignore
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('comments');

	try {
		const data = await request.json();

		// Insert data into the database
		const newComment = await coll.insertOne({
			id: uuidv4(),
			text: data.text,
			commentBy: 4625367423498,
			postId: data.postId,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		console.log('add comment is success:', newComment);

		// Return a success response with the inserted document
		return json({
			status: 200,
			message: 'add comment is success',
			data: newComment
		});
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('add comment is failed:', error);
		return json({
			status: 500,
			error: 'add comment is failed',
			message: 'Internal Server Error'
		});
	}
}
