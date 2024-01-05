// @ts-nocheck
import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

export async function PATCH({ request }) {
	const dbConn = await clientPromise;
	const db = await dbConn.db();
	const coll = db.collection('posts');

	try {
		const data = await request.json();
		// Get the user with the specified ID
		const post = await coll.findOne({ id: data.id });

		if (!post) {
			return json({
				status: 404,
				error: 'post is not found'
			});
		}
		// Create a document to update the post
		const updateDoc = {};

		// If the name is provided, update it
		if (data.name !== undefined && data.name !== '') {
			updateDoc.name = data.name;
		}

		if (data.description !== undefined && data.description !== '') {
			updateDoc.description = data.description;
		}

		if (data.magnet !== undefined && data.magnet !== '') {
			updateDoc.magnet = data.magnet;
		}

		if (data.download !== undefined && data.download !== '') {
			updateDoc.download = data.download;
		}

		if (data.isArchived !== undefined && data.isArchived !== '') {
			updateDoc.isArchived = data.isArchived;
		}

		if (data.category !== undefined && data.category !== '') {
			updateDoc.category = data.category;
		}

		if (data.size !== undefined && data.size !== '') {
			updateDoc.size = data.size;
		}
        
		updateDoc.updatedAt = new Date();

		// Update the post with the specified ID
		const result = await coll.updateOne({ id: data.id }, { $set: updateDoc });

		if (result.modifiedCount === 1) {
			return json({
				status: 200,
				message: 'post is updated successfully'
			});
		} else {
			return json({
				status: 404,
				error: 'post is not found'
			});
		}
	} catch (error) {
		// Handle errors and return an error response with appropriate status code and message
		console.error('Update post is failed:', error);
		return json({
			status: 500,
			error: 'Update post is failed',
			message: 'Internal server error'
		});
	}
}
