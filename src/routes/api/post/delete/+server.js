// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function DELETE({ url }) {
	const id = url.searchParams.get('id');

	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('posts');

	try {
		// Delete the user with the specified ID
		const result = await coll.deleteOne({ id: id });

		if (result.deletedCount === 1) {
			return json({
				status: 200,
				message: 'User is deleted successfully'
			});
		} else {
			return json({
				status: 404,
				error: 'User is not found'
			});
		}
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Delete user is failed:', error);
		return json({
			status: 500,
			error: 'Delete user is failed',
			message: 'Internal server error'
		});
	}
}