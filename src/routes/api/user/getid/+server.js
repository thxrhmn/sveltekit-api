// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const id = url.searchParams.get('id');

	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('users');

	try {
		// Get the user with the specified ID
		const user = await coll.findOne({ id: id });
        console.log(user);
        console.log(id);

		if (user) {
			return json({
				status: 200,
				data: user
			});
		} else {
			return json({
				status: 404,
				error: 'User is not found'
			});
		}
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Get user is failed:', error);
		return json({
			status: 500,
			error: 'Get user is failed',
			message: 'Internal server error'
		});
	}
}