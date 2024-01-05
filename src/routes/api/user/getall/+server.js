// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function GET() {
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('users');

	try {
		// Get all data from the collection
		const data = await coll.find({}).toArray();

		return json({
			status: 200,
			message: 'Get data is successful',
			data
		});
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Get data is failed:', error);
		return json({
			status: 500,
			error: 'Get data is failed',
			message: 'Internal server error'
		});
	}
}
