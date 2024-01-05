// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const id = url.searchParams.get('id');

	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('posts');

	try {
		// Get the post with the specified ID
		const post = await coll.findOne({ uri: id });

		if (post) {
			return json({
				status: 200,
				data: post
			});
		} else {
			return json({
				status: 404,
				error: 'post is not found'
			});
		}
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Get post is failed:', error);
		return json({
			status: 500,
			error: 'Get post is failed',
			message: 'Internal server error'
		});
	}
}